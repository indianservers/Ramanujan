import { PageTools } from "../../shared/PageTools";
import { SiteFooter } from "../../shared/SiteFooter";
import { SiteHeader } from "../../shared/SiteHeader";
import { PublishedPapers } from "./PublishedPapers";

export default function PublishedPapersPage() {
  return <><SiteHeader active="Resources" /><main className="editorial-page"><section className="page-heading"><h1>Verified Papers Currently Indexed</h1><p>A scholarly index of Ramanujan&apos;s published papers where reliable bibliographic information is available.</p><PageTools id="resource:published-papers" label="Published Papers" citation="Published paper records indexed from collected-paper references." /></section><PublishedPapers /></main><SiteFooter /></>;
}
