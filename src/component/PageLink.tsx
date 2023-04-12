import Link from "next/link";
import { CSSProperties } from "react";

interface PageLinkI {
  name:string,
  href:string,
  style?:CSSProperties
}
const PageLink: React.FC<PageLinkI> = ({ name, href, style }) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "black", ...style }}
      href={href}
    >
      {name}
    </Link>
  );
};

export default PageLink
