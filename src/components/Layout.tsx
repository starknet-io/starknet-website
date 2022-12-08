import React from "react";
import Navbar from "./Navbar";

interface PageLayoutProps {
  readonly children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
