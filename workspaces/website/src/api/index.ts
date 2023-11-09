/**
 * Module dependencies.
 */

import { Router, createCors, error, json } from 'itty-router'

// now let's create a router (note the lack of "new")
export const apiRouter = Router({ base: "/api" });

export const { preflight, corsify } = createCors({
  origins: ['*'],
});

apiRouter.all("*", preflight);

apiRouter.get(
  "/youtube",
  async (req, env: PAGES_VARS) => {
    if (typeof req.query.id !== "string") {
      return corsify(error(422, { message: "Invalid id provided!" }));
    }

    const query = new URLSearchParams();

    query.set("version", "v3");
    // TODO fix env for cf pages
    query.set("key", env.YOUTUBE_API_KEY);
    query.set("id", req.query.id as string);
    query.set("part", "snippet");
    query.append("part", "contentDetails");

    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?${query}`
    );

    const data: any = await response.json();

    const item = data?.items?.[0];

    if (item == null) {
      return corsify(
        error(404, {
          message: "Video not found!",
        })
      );
    }

    return corsify(
      json({
        data: item,
      })
    );
  }
);

/**
 * Newsletter subscribe api route.
 */

apiRouter.post(
  '/newsletter-subscribe',
  async (req, env: PAGES_VARS) => {
    try {
      const formData = new FormData();

      formData.append('secret', env.CLOUDFLARE_RECAPTCHA_KEY);
      formData.append('response', req.query.token as string);
      
      const captchaUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
      const captchaResponse = await fetch(captchaUrl, {
        body: formData,
        method: 'POST',
      });

      const captchaResult = await captchaResponse.json() as { success: boolean };

      if (!captchaResult.success) {
        return corsify(error(
          422,
          { title: 'Invalid Captcha' }
        ));
      }
      
      const mailchimpResponse = await fetch(
        env.MAILCHIMP_NEWSLETTER_URL,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`anystring:${env.MAILCHIMP_API_KEY}`)}`
          },
          body: JSON.stringify({
            email_address: req.query.email as string,
            status: 'subscribed',
          })
        }
      )

      const mailchimpResult = await mailchimpResponse.json() as any;

      if(mailchimpResponse.ok !== true) {
        return corsify(error(
          mailchimpResponse.status,
          mailchimpResult
        ));
      }

      return corsify(json({
        message: 'Successfully subscribed to newsletter!',
        ...mailchimpResult
      }));
    } catch (err) {
      return corsify(error(
        (err as any)?.status ?? 500,
        (err as any)?.response?.text ? JSON.parse((err as any)?.response?.text) : {
          error: 'Internal Server Error'
        }
      ));
    }
  }
)
