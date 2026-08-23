import Link from "next/link";
import { categories } from "../data/archive";
import { HeritageIcon } from "./HeritageIcon";

const nav = ["Home", "Discoveries", "Formulas", "Notebooks", "Life", "Legacy", "Resources", "About"];

const navIcons = {
  Home: "lotus",
  Discoveries: "yantra",
  Formulas: "leaf",
  Notebooks: "book",
  Life: "lamp",
  Legacy: "conch",
  Resources: "veena",
  About: "mandala",
} as const;

function hrefFor(item: string) {
  return item === "Home" ? "/" : `/${item.toLowerCase()}`;
}

export function SiteHeader({ active }: { active: string }) {
  return (
    <header className="site-header">
      <Link prefetch={false} className="brand" href="/" aria-label="The Ramanujan Universe home">
        <span className="brand-mark" aria-hidden="true"><HeritageIcon name="mandala" />R</span>
        <span>
          <strong>The Ramanujan Universe</strong>
          <em>The Man. The Mathematics. The Mystery.</em>
        </span>
      </Link>
      <input className="nav-toggle" id="nav-toggle" type="checkbox" aria-label="Toggle navigation" />
      <label className="nav-toggle-label" htmlFor="nav-toggle">
        <span className="sr-only">Toggle navigation</span>
        <span />
        <span />
        <span />
      </label>
      <nav className="main-nav" aria-label="Main navigation">
        {nav.map((item) =>
          item === "Discoveries" ? (
            <div className="nav-group" key={item}>
              <Link prefetch={false} className={active === item ? "active" : ""} href="/discoveries">
                <HeritageIcon name={navIcons.Discoveries} /> Discoveries
              </Link>
              <div className="mega-menu" aria-label="Discoveries menu">
                <Link prefetch={false} href="/discoveries">All Discoveries</Link>
                <Link prefetch={false} href="/named-concepts">Named Concepts</Link>
                <Link prefetch={false} href="/formulas">Featured Formulas</Link>
                <Link prefetch={false} href="/resources/published-papers">Published Papers</Link>
                {categories.map((category) => (
                  <Link prefetch={false} href={`/discoveries/category/${category.slug}`} key={category.slug}>
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : item === "Notebooks" ? (
            <div className="nav-group" key={item}>
              <Link prefetch={false} className={active === item ? "active" : ""} href="/notebooks"><HeritageIcon name={navIcons.Notebooks} /> Notebooks</Link>
              <div className="mega-menu" aria-label="Notebooks menu">
                <Link prefetch={false} href="/notebooks">Notebook Overview</Link>
                <Link prefetch={false} href="/notebooks/three-notebooks">Three Notebooks</Link>
                <Link prefetch={false} href="/notebooks/lost-notebook">Lost Notebook</Link>
                <Link prefetch={false} href="/discoveries?source=Lost%20Notebook">Notebook Discoveries</Link>
                <Link prefetch={false} href="/my-notebook">My Notebook</Link>
              </div>
            </div>
          ) : item === "Life" ? (
            <div className="nav-group" key={item}>
              <Link prefetch={false} className={active === item ? "active" : ""} href="/life"><HeritageIcon name={navIcons.Life} /> Life</Link>
              <div className="mega-menu" aria-label="Life menu">
                <Link prefetch={false} href="/life">Biography</Link>
                <Link prefetch={false} href="/timeline">Timeline</Link>
                <Link prefetch={false} href="/life/namagiri-devi-and-faith">Namagiri Devi and His Faith</Link>
                <Link prefetch={false} href="/life/gh-hardy">G. H. Hardy</Link>
                <Link prefetch={false} href="/life/janaki-ammal">Janaki Ammal</Link>
                <Link prefetch={false} href="/life/cambridge-years">Cambridge Years</Link>
                <Link prefetch={false} href="/life/return-to-india">Return to India</Link>
                <Link prefetch={false} href="/letters">Letters</Link>
              </div>
            </div>
          ) : item === "Resources" ? (
            <div className="nav-group" key={item}>
              <Link prefetch={false} className={active === item ? "active" : ""} href="/resources"><HeritageIcon name={navIcons.Resources} /> Resources</Link>
              <div className="mega-menu" aria-label="Resources menu">
                <Link prefetch={false} href="/resources/published-papers">Published Papers</Link>
                <Link prefetch={false} href="/resources/references">References</Link>
                <Link prefetch={false} href="/resources/further-reading">Further Reading</Link>
                <Link prefetch={false} href="/formulas">Formula Archive</Link>
                <Link prefetch={false} href="/named-concepts">Named Concepts</Link>
                <Link prefetch={false} href="/search">Search</Link>
              </div>
            </div>
          ) : (
            <Link prefetch={false} className={active === item ? "active" : ""} href={hrefFor(item)} key={item}>
              <HeritageIcon name={navIcons[item as keyof typeof navIcons]} /> {item}
            </Link>
          ),
        )}
      </nav>
    </header>
  );
}
