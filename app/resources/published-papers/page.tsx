import { PageTools } from "../../shared/PageTools";
import { SiteFooter } from "../../shared/SiteFooter";
import { SiteHeader } from "../../shared/SiteHeader";
import { PublishedPapers } from "./PublishedPapers";
import { papers } from "../../data/archive";

export default function PublishedPapersPage() {
  return <><SiteHeader active="Resources" /><main className="editorial-page"><section className="page-heading"><h1>Verified Papers Currently Indexed</h1><p>A scholarly index of {papers.length} Ramanujan published-paper records, cross-checked against collected-paper and published-works references.</p><PageTools id="resource:published-papers" label="Published Papers" citation="Published paper records indexed from collected-paper references and the published works listing." /></section><PublishedPapers /></main><SiteFooter /></>;
}
