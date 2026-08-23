import Link from "next/link";
import { categories } from "../data/archive";
import { HeritageIcon } from "./HeritageIcon";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <h2><HeritageIcon name="lotus" /> The Ramanujan Universe</h2>
        <p>A scholarly archive for Ramanujan&apos;s life, discoveries, notebooks, correspondence and mathematical legacy.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link prefetch={false} href="/discoveries">Discoveries</Link>
        <Link prefetch={false} href="/life">Life</Link>
        <Link prefetch={false} href="/notebooks">Notebooks</Link>
        <Link prefetch={false} href="/letters">Letters</Link>
        <Link prefetch={false} href="/timeline">Timeline</Link>
        <Link prefetch={false} href="/legacy">Legacy</Link>
        <Link prefetch={false} href="/resources">Resources</Link>
        <Link prefetch={false} href="/search">Search</Link>
        <Link prefetch={false} href="/my-notebook">My Notebook</Link>
        <Link prefetch={false} href="/about">About</Link>
      </nav>
      <nav aria-label="Discovery categories">
        {categories.slice(0, 6).map((item) => (
          <Link prefetch={false} href={`/discoveries/category/${item.slug}`} key={item.slug}>
            {item.title}
          </Link>
        ))}
      </nav>
      <p className="educational-note">Educational and scholarly presentation. Exact notebook attribution and incomplete bibliographic details are labelled for review.</p>
    </footer>
  );
}
