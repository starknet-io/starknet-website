import React from "react"
import { IntlProvider } from "react-intl"
import { LocaleProvider } from "gatsby-theme-i18n"

interface Props {
    readonly children: React.ReactNode
    readonly pageContext: {
        readonly locale: string;
    }
}

export function DocumentLayout ({ children, pageContext }: Props) {
  const locale = pageContext.locale
  const messages = require(`../../i18n/intl/${locale}.json`)

  return (
    <LocaleProvider pageContext={pageContext}>
      <IntlProvider locale={locale} key={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LocaleProvider>
  )
}

