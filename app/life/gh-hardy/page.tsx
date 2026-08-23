import { lifeProfiles } from "../../data/archive";
import { EditorialPage } from "../../shared/EditorialPage";

export default function HardyPage() {
  const profile = lifeProfiles.find((item) => item.slug === "gh-hardy")!;
  return <EditorialPage active="Life" eyebrow="Biography" title={profile.title} subtitle={profile.subtitle} image={profile.image} imageAlt={profile.alt} summary={profile.summary} sections={profile.sections} citation={profile.citation} saveId={`life:${profile.slug}`} links={profile.relatedLinks} relatedDiscoverySlugs={["hardy-ramanujan-asymptotic-formula", "hardy-ramanujan-circle-method"]} />;
}
