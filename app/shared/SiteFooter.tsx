import { categories } from "../data/archive";
import { AppDownloadCta } from "./AppDownloadCta";
import { HeritageIcon } from "./HeritageIcon";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <AppDownloadCta />
      <div>
        <h2><HeritageIcon name="lotus" /> The Ramanujan Universe</h2>
        <p>A scholarly archive for Ramanujan&apos;s life, discoveries, notebooks, correspondence and mathematical legacy.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="/discoveries">Discoveries</a>
        <a href="/life">Life</a>
        <a href="/notebooks">Notebooks</a>
        <a href="/letters">Letters</a>
        <a href="/timeline">Timeline</a>
        <a href="/legacy">Legacy</a>
        <a href="/resources">Resources</a>
        <a href="/search">Search</a>
        <a href="/my-notebook">My Notebook</a>
        <a href="/about">About</a>
      </nav>
      <nav aria-label="Discovery categories">
        {categories.slice(0, 6).map((item) => (
          <a href={`/discoveries/category/${item.slug}`} key={item.slug}>
            {item.title}
          </a>
        ))}
      </nav>
      <p className="educational-note">Educational and scholarly presentation. Exact notebook attribution and incomplete bibliographic details are labelled for review.</p>
    </footer>
  );
}
