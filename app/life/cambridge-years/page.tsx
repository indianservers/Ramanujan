import { lifeProfiles } from "../../data/archive";
import { EditorialPage } from "../../shared/EditorialPage";

export default function CambridgeYearsPage() {
  const profile = lifeProfiles.find((item) => item.slug === "cambridge-years")!;
  return <EditorialPage active="Life" eyebrow="Cambridge" title={profile.title} subtitle={profile.subtitle} image={profile.image} imageAlt={profile.alt} summary={profile.summary} sections={profile.sections} citation={profile.citation} saveId={`life:${profile.slug}`} links={profile.relatedLinks} relatedDiscoverySlugs={["ramanujan-tau-function", "highly-composite-numbers", "hardy-ramanujan-asymptotic-formula"]} />;
}
