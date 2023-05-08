import React, { useState } from "react";
import airtable from "airtable";
import cn from "classnames";
import navLogo from "./assets/STARKNET_logo.svg";
import twitterIcon from "./assets/_Twitter.svg";
import discordIcon from "./assets/_Discord.svg";
import youtubeIcon from "./assets/_YouTube.svg";
import githubIcon from "./assets/_Github.svg";
import communityIcon from "./assets/icons.social.svg";
import logo from "./assets/STARKNET Icon.svg";
import checkCircle from "./assets/check-circle.svg";
import "./App.css";

const socialItems = [
  {
    href: "https://starknet.io/discord",
    img: discordIcon,
  },
  {
    href: "https://github.com/starknet-io/starknet-website",
    img: githubIcon,
  },
  {
    href: "https://www.youtube.com/channel/UCnDWguR8mE2oDBsjhQkgbvg",
    img: youtubeIcon,
  },
  {
    href: "https://twitter.com/Starknet",
    img: twitterIcon,
  },
  {
    href: "https://community.starknet.io/",
    img: communityIcon,
  },
];

const baseId = import.meta.env.VITE_BASE_ID;
const pat = import.meta.env.VITE_PERSONAL_ACCESS_TOKEN;
const dbName = import.meta.env.VITE_AIRTABLE_DB_NAME;
const base = new airtable({ apiKey: pat }).base(baseId || "");

function NewsletterForm(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      await base(dbName || "").create(
        [
          {
            fields: {
              Email: email,
            },
          },
        ],
        {
          typecast: true,
        }
      );
      setIsSubmitting(false);
      setEmail("");
      setIsSuccess(true);
    } catch (error) {
      setIsSubmitting(false);
      setEmailError("Oops! Something went wrong.");
    }
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-container">
          <a
            href="https://starknet.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={navLogo} alt="nav-logo" />
          </a>
        </div>
        <div className="social">
          {socialItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.img} alt="" />
            </a>
          ))}
        </div>
      </header>
      <div className="container">
        <img src={logo} className="logo" alt="starknet-logo" />

        <h1>Starknet Summit</h1>
        <div className="medium-text">
          San Francisco Bay Area, CA | August 31, 2023
        </div>
        <div className="divider" />
        <div className="medium-text">
          More details coming soon.
          <br />
          Sign up for updates.
        </div>
        {isSuccess ? (
          <div className="success-container">
            <img src={checkCircle} alt="success-circle" className="circle" />
            <div className="text">Successfully submitted!</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="email"></label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(event.target.value);
                  setEmailError("");
                }}
                className={emailError ? "error" : ""}
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </div>

            <button
              type="submit"
              className={cn("submit-button", {
                "button-is-submitting": isSubmitting,
              })}
            >
              {isSubmitting ? <div className="loader" /> : "Sign Up"}
            </button>
          </form>
        )}
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="social footer">
            {socialItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.img} alt="" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NewsletterForm;
