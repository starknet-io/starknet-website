import React from "react";
import { DocumentLayout } from "./src/components/Layout";
import i18nConfig from "./i18n/config.json";
import { GatsbySSR } from "gatsby";

const languages = new Set(i18nConfig.map((c) => c.code));

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => {
  const { location } = props;
  const { pathname } = location;

  const [, pathLocale] = pathname.split("/");

  if (process.env.NODE_ENV === "development" && !languages.has(pathLocale)) {
    return null as any;
  }

  return <DocumentLayout {...props as any}>{element}</DocumentLayout>;
};
