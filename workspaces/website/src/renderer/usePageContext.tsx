import React, { useContext } from "react";
import type { PageContext } from "./types";

export { PageContextProvider };
export { usePageContext };

const Context = React.createContext<PageContext>(undefined as any);

function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) {
  if (!import.meta.env.SSR) {
    pageContext.event = null;
  }

  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
