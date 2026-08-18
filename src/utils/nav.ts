export function isNavActive(pathname: string, href: string): boolean {
  if (href.startsWith("/#")) return pathname === "/";
  const path = href.split("#")[0];
  if (path === "/") return pathname === "/";
  return pathname.startsWith(path);
}

export function navLinkClass(pathname: string, href: string): string {
  return isNavActive(pathname, href) ? "nav-link nav-link-active" : "nav-link";
}

export function mobileNavLinkClass(pathname: string, href: string): string {
  const base = "mobile-nav-link block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors";
  return isNavActive(pathname, href)
    ? `${base} mobile-nav-link-active`
    : `${base}`;
}
