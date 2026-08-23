import Link from "next/link";
import { timelineEvents } from "../data/archive";
import { PageTools } from "../shared/PageTools";
import { SiteFooter } from "../shared/SiteFooter";
import { SiteHeader } from "../shared/SiteHeader";

export default function TimelinePage() {
  return (
    <>
      <SiteHeader active="Life" />
      <main className="editorial-page">
        <section className="page-heading">
          <h1>A Life Measured in Infinite Ideas</h1>
          <p>A chronological editorial timeline of Ramanujan&apos;s life, work and legacy.</p>
          <PageTools id="timeline:master" label="Master Timeline" citation="Ramanujan biographical timeline compiled from project source records." />
        </section>
        <section className="master-timeline">
          {timelineEvents.map((event) => (
            <article className="parchment" key={event.slug}>
              <p className="detail-meta">{event.date} | {event.location}</p>
              <h2>{event.title}</h2>
              <p>{event.text}</p>
              {event.relatedPerson ? <p><strong>Related person:</strong> {event.relatedPerson}</p> : null}
              {event.relatedDiscoverySlug ? <Link prefetch={false} href={`/discoveries/${event.relatedDiscoverySlug}`}>Related discovery</Link> : null}
              {event.relatedSource ? <p className="citation">{event.relatedSource}</p> : null}
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
