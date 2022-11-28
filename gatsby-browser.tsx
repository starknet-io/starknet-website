import "./src/css/index.css"

import React from "react"
import browserLang from "browser-lang"
import { GatsbyBrowser, withPrefix } from "gatsby"
import { DocumentLayout } from "./src/components/Layout"
import i18nConfig from "./i18n/config.json";

const languages = new Set(i18nConfig.map((c) => c.code));
const defaultLanguage = "en"

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  const { location, pageContext } = props
  const { pathname, search } = location
  const { originalPath } = pageContext
  const [, pathLocale] = pathname.split("/")

  if (process.env.NODE_ENV === "development" && !languages.has(pathLocale)) {
    let detected =
      window.localStorage.getItem("app-language") ||
      browserLang({
        languages,
        fallback: defaultLanguage,
      })

    if (!languages.has(detected)) {
      detected = defaultLanguage
    }

    const queryParams = search || ""
    const newUrl = withPrefix(`/${detected}${originalPath}${queryParams}`)
    window.localStorage.setItem("app-language", detected)
    window.location.replace(newUrl)

    return null as any
  }

  return <DocumentLayout {...props as any}>{element}</DocumentLayout>
}
