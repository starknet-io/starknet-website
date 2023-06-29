import { usePageContext } from "./PageContextProvider";

export function Link({ href, children }: { href: string; children: string }) {
  const { urlPathname: pathname } = usePageContext();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <a href={href} className={isActive ? "is-active" : undefined}>
      {children}
    </a>
  );
}
