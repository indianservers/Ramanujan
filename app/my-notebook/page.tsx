import { PageTools } from "../shared/PageTools";
import { SiteFooter } from "../shared/SiteFooter";
import { SiteHeader } from "../shared/SiteHeader";
import { SavedNotebook } from "./SavedNotebook";

export default function MyNotebookPage() {
  return (
    <>
      <SiteHeader active="Notebooks" />
      <main className="editorial-page">
        <section className="page-heading">
          <h1>My Notebook</h1>
          <p>Your personal browser-based collection. Nothing is sent externally and no sign-in is required.</p>
          <PageTools id="page:my-notebook" label="My Notebook" citation="Local saved notebook feature." />
        </section>
        <SavedNotebook />
      </main>
      <SiteFooter />
    </>
  );
}
