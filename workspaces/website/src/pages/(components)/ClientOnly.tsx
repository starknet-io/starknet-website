// @see https://vite-plugin-ssr.com/client-only-components#react
import React, { useEffect, useState } from "react";

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? <>{children}</> : null;
};

export default ClientOnly;
