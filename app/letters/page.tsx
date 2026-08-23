import Link from "next/link";
import { letters } from "../data/archive";
import { PageTools } from "../shared/PageTools";
import { SiteFooter } from "../shared/SiteFooter";
import { SiteHeader } from "../shared/SiteHeader";

export default function LettersPage() {
  return (
    <>
      <SiteHeader active="Life" />
      <main className="editorial-page">
        <section className="page-heading">
          <h1>Letters That Changed Mathematics</h1>
          <p>Ramanujan&apos;s correspondence carried extraordinary formulas from India to Cambridge.</p>
          <PageTools id="letter:archive" label="Letters Archive" citation="Ramanujan-Hardy correspondence archive summary." />
        </section>
        <div className="formula-grid">
          {letters.map((letter) => (
            <article className="formula-card" key={letter.slug}>
              <img src={letter.image} alt="" />
              <p className="detail-meta">{letter.date} | {letter.sender} to {letter.recipient}</p>
              <h2>{letter.title}</h2>
              <p>{letter.context}</p>
              <p>{letter.significance}</p>
              <p className="citation">{letter.citation}</p>
              <Link prefetch={false} href={`/letters/${letter.slug}`}>Read Letter Context</Link>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
