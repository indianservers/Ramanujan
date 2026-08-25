"use client";

import type { ReactNode } from "react";
import { useState } from "react";
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
  onClick,
}: {
  active?: boolean;
  children: ReactNode;
  href: string;
  onClick?: () => void;
}) {
  return (
    <a className={active ? "active" : ""} href={href} onClick={onClick}>
      {children}
    </a>
  );
}

export function SiteHeader({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="The Ramanujan Universe home" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true"><HeritageIcon name="mandala" />R</span>
        <span>
          <strong>The Ramanujan Universe</strong>
          <em>The Man. The Mathematics. The Mystery.</em>
        </span>
      </a>
      <button className="nav-toggle-label" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen((value) => !value)}>
        <span className="sr-only">Toggle navigation</span>
        <span />
        <span />
        <span />
      </button>
      <nav className={`main-nav ${open ? "open" : ""}`} id="main-navigation" aria-label="Main navigation">
        {nav.map((item) =>
          item === "Discoveries" ? (
            <div className="nav-group" key={item}>
              <NavAnchor active={active === item} href="/discoveries" onClick={() => setOpen(false)}>
                <HeritageIcon name={navIcons.Discoveries} /> Discoveries
              </NavAnchor>
              <div className="mega-menu" aria-label="Discoveries menu">
                <a href="/discoveries" onClick={() => setOpen(false)}>All Discoveries</a>
                <a href="/named-concepts" onClick={() => setOpen(false)}>Named Concepts</a>
                <a href="/formulas" onClick={() => setOpen(false)}>Featured Formulas</a>
                <a href="/resources/published-papers" onClick={() => setOpen(false)}>Published Papers</a>
                {categories.map((category) => (
                  <a href={`/discoveries/category/${category.slug}`} key={category.slug} onClick={() => setOpen(false)}>
                    {category.title}
                  </a>
                ))}
              </div>
            </div>
          ) : item === "Notebooks" ? (
            <div className="nav-group" key={item}>
              <NavAnchor active={active === item} href="/notebooks" onClick={() => setOpen(false)}>
                <HeritageIcon name={navIcons.Notebooks} /> Notebooks
              </NavAnchor>
              <div className="mega-menu" aria-label="Notebooks menu">
                <a href="/notebooks" onClick={() => setOpen(false)}>Notebook Overview</a>
                <a href="/notebooks/three-notebooks" onClick={() => setOpen(false)}>Three Notebooks</a>
                <a href="/notebooks/lost-notebook" onClick={() => setOpen(false)}>Lost Notebook</a>
                <a href="/discoveries?source=Lost%20Notebook" onClick={() => setOpen(false)}>Notebook Discoveries</a>
                <a href="/my-notebook" onClick={() => setOpen(false)}>My Notebook</a>
              </div>
            </div>
          ) : item === "Life" ? (
            <div className="nav-group" key={item}>
              <NavAnchor active={active === item} href="/life" onClick={() => setOpen(false)}>
                <HeritageIcon name={navIcons.Life} /> Life
              </NavAnchor>
              <div className="mega-menu" aria-label="Life menu">
                <a href="/life" onClick={() => setOpen(false)}>Biography</a>
                <a href="/timeline" onClick={() => setOpen(false)}>Timeline</a>
                <a href="/life/namagiri-devi-and-faith" onClick={() => setOpen(false)}>Namagiri Devi and His Faith</a>
                <a href="/life/gh-hardy" onClick={() => setOpen(false)}>G. H. Hardy</a>
                <a href="/life/janaki-ammal" onClick={() => setOpen(false)}>Janaki Ammal</a>
                <a href="/life/cambridge-years" onClick={() => setOpen(false)}>Cambridge Years</a>
                <a href="/life/return-to-india" onClick={() => setOpen(false)}>Return to India</a>
                <a href="/letters" onClick={() => setOpen(false)}>Letters</a>
              </div>
            </div>
          ) : item === "Ramanujan" ? (
            <div className="nav-group" key={item}>
              <NavAnchor active={active === item} href="/ramanujan" onClick={() => setOpen(false)}>
                <HeritageIcon name={navIcons.Ramanujan} /> Ramanujan
              </NavAnchor>
              <div className="mega-menu" aria-label="Ramanujan context menu">
                <a href="/ramanujan" onClick={() => setOpen(false)}>Context Hub</a>
                <a href="/ramanujan/education-and-self-study" onClick={() => setOpen(false)}>Education and Self-Study</a>
                <a href="/ramanujan/carr-synopsis" onClick={() => setOpen(false)}>Carr&apos;s Synopsis</a>
                <a href="/ramanujan/early-patrons" onClick={() => setOpen(false)}>Patrons Before Hardy</a>
                <a href="/ramanujan/health-and-final-years" onClick={() => setOpen(false)}>Health and Final Years</a>
                <a href="/ramanujan/myths-vs-facts" onClick={() => setOpen(false)}>Myths vs Facts</a>
                <a href="/ramanujan/modern-impact" onClick={() => setOpen(false)}>Modern Impact</a>
                <a href="/ramanujan/interactive-learning" onClick={() => setOpen(false)}>Interactive Learning Ideas</a>
              </div>
            </div>
          ) : (
            <NavAnchor active={active === item} href={hrefFor(item)} key={item} onClick={() => setOpen(false)}>
              <HeritageIcon name={navIcons[item as keyof typeof navIcons]} /> {item}
            </NavAnchor>
          ),
        )}
      </nav>
    </header>
  );
}
