/**
 * Module dependencies.
 */

import { useState } from "react";
import RoadmapSubscribeForm from "src/pages/(components)/roadmap/RoadmapSubscribeForm";
import { ImageIconCard } from "./ImageIconCard";


/**
 * `Props` type.  
 */

type Props = {
  description: string,
  env: {
    CLOUDFLARE_RECAPTCHA_KEY: string;
  };
  locale: string;
  title: string;
};

/**
 * Export `NewsletterCard` component.
 */

export const NewsletterCard = ({
  description,
  env,
  locale,
  title
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <RoadmapSubscribeForm 
        env={env}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <ImageIconCard 
        columns={4}
        defaultIcon={'/assets/cards/newsletter.svg'}
        description={description}
        onClick={() => setIsOpen(true)}
        orientation={'left'}
        size={'large'}
        title={title}
        variant={'community_card'}
        locale={locale}
        withIllustration={false}
      />
    </>
  );
};
