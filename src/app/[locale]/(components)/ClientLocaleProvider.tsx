"use client";

import React, { createContext, useContext } from "react";
import { defaultLocale } from "src/data/i18n/config";
import { MessagesType } from "src/data/i18n/intl";

interface State {
  readonly locale: string;
  readonly messages: Partial<MessagesType>;
}

const context = createContext<State>({
  locale: defaultLocale,
  messages: {},
});

export function ClientLocaleProvider({
  value,
  children,
}: React.PropsWithChildren<{ readonly value: State }>) {
  return <context.Provider value={value}>{children}</context.Provider>;
}

export function useLocale() {
  const { locale } = useContext(context);

  return locale;
}

export function useMessages() {
  const { messages } = useContext(context);

  return messages;
}
