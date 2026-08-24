import type { ReactNode } from "react";
import { categories } from "../data/archive";
import { HeritageIcon } from "./HeritageIcon";

const nav = ["Home", "Discoveries", "Formulas", "Notebooks", "Life", "Ramanujan", "Legacy", "About"];

const navIcons = {
  Home: "lotus",
  Discoveries: "yantra",
  Formulas: "leaf",
  Notebooks: "book",
  Life: "lamp",
  Ramanujan: "mandala",
  Legacy: "conch",
  About: "mandala",
} as const;

function hrefFor(item: string) {
  return item === "Home" ? "/" : `/${item.toLowerCase()}`;
}

function NavAnchor({
  active,
  children,
  href,
}: {
  active?: boolean;
  children: ReactNode;
  href: string;
}) {
  return (
    <a className={active ? "active" : ""} href={href}>
      {children}
    </a>
  );
}

export function SiteHeader({ active }: { active: string }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="The Ramanujan Universe home">
        <span className="brand-mark" aria-hidden="true"><HeritageIcon name="mandala" />R</span>
        <span>
          <strong>The Ramanujan Universe</strong>
          <em>The Man. The Mathematics. The Mystery.</em>
        </span>
      </a>
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
              <NavAnchor active={active === item} href="/discoveries">
                <HeritageIcon name={navIcons.Discoveries} /> Discoveries
              </NavAnchor>
              <div className="mega-menu" aria-label="Discoveries menu">
                <a href="/discoveries">All Discoveries</a>
                <a href="/named-concepts">Named Concepts</a>
                <a href="/formulas">Featured Formulas</a>
                <a href="/resources/published-papers">Published Papers</a>
                {categories.map((category) => (
                  <a href={`/discoveries/category/${category.slug}`} key={category.slug}>
                    {category.title}
                  </a>
                ))}
              </div>
            </div>
          ) : item === "Notebooks" ? (
            <div className="nav-group" key={item}>
              <NavAnchor active={active === item} href="/notebooks">
                <HeritageIcon name={navIcons.Notebooks} /> Notebooks
              </NavAnchor>
              <div className="mega-menu" aria-label="Notebooks menu">
                <a href="/notebooks">Notebook Overview</a>
                <a href="/notebooks/three-notebooks">Three Notebooks</a>
                <a href="/notebooks/lost-notebook">Lost Notebook</a>
                <a href="/discoveries?source=Lost%20Notebook">Notebook Discoveries</a>
                <a href="/my-notebook">My Notebook</a>
              </div>
            </div>
          ) : item === "Life" ? (
            <div className="nav-group" key={item}>
              <NavAnchor active={active === item} href="/life">
                <HeritageIcon name={navIcons.Life} /> Life
              </NavAnchor>
              <div className="mega-menu" aria-label="Life menu">
                <a href="/life">Biography</a>
                <a href="/timeline">Timeline</a>
                <a href="/life/namagiri-devi-and-faith">Namagiri Devi and His Faith</a>
                <a href="/life/gh-hardy">G. H. Hardy</a>
                <a href="/life/janaki-ammal">Janaki Ammal</a>
                <a href="/life/cambridge-years">Cambridge Years</a>
                <a href="/life/return-to-india">Return to India</a>
                <a href="/letters">Letters</a>
              </div>
            </div>
          ) : item === "Ramanujan" ? (
            <div className="nav-group" key={item}>
              <NavAnchor active={active === item} href="/ramanujan">
                <HeritageIcon name={navIcons.Ramanujan} /> Ramanujan
              </NavAnchor>
              <div className="mega-menu" aria-label="Ramanujan context menu">
                <a href="/ramanujan">Context Hub</a>
                <a href="/ramanujan/education-and-self-study">Education and Self-Study</a>
                <a href="/ramanujan/carr-synopsis">Carr's Synopsis</a>
                <a href="/ramanujan/early-patrons">Patrons Before Hardy</a>
                <a href="/ramanujan/health-and-final-years">Health and Final Years</a>
                <a href="/ramanujan/myths-vs-facts">Myths vs Facts</a>
                <a href="/ramanujan/modern-impact">Modern Impact</a>
                <a href="/ramanujan/interactive-learning">Interactive Learning Ideas</a>
              </div>
            </div>
          ) : (
            <NavAnchor active={active === item} href={hrefFor(item)} key={item}>
              <HeritageIcon name={navIcons[item as keyof typeof navIcons]} /> {item}
            </NavAnchor>
          ),
        )}
      </nav>
    </header>
  );
}
