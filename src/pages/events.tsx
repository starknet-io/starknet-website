import * as React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";
import { PageLayout } from "../components/Layout";

export default function (props: PageProps<any>) {
  const settings = props.data.settings ?? props.data.defaultSettings

  return (
    <PageLayout>
      <h2>{settings.childSettings.title}</h2>
      <p>{settings.childSettings.description}</p>
    </PageLayout>
  );
}

export function Head(props: HeadProps<any>) {
  const settings = props.data.settings ?? props.data.defaultSettings

  return <title>{settings.childSettings.title}</title>;
}

export const query = graphql`
  query ($locale: String!) {
    settings: file(
      relativePath: {regex: "/events-page\\.yml/"}
      sourceInstanceName: {eq: "settings"}
      childSettings: {fields: {locale: {eq: $locale}}}
    ) {
      relativePath
      childSettings {
        fields {
          locale
          isDefault
        }
        title
        description
      }
    }
    defaultSettings: file(
      relativePath: {regex: "/events-page\\.yml/"}
      sourceInstanceName: {eq: "settings"}
      childSettings: {fields: {isDefault: {eq: true}}}
    ) {
      relativePath
      childSettings {
        fields {
          locale
          isDefault
        }
        title
        description
      }
    }
  }
`;
