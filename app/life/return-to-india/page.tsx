import { lifeProfiles } from "../../data/archive";
import { EditorialPage } from "../../shared/EditorialPage";

export default function ReturnToIndiaPage() {
  const profile = lifeProfiles.find((item) => item.slug === "return-to-india")!;
  return <EditorialPage active="Life" eyebrow="Final Years" title={profile.title} subtitle={profile.subtitle} image={profile.image} imageAlt={profile.alt} summary={profile.summary} sections={profile.sections} citation={profile.citation} saveId={`life:${profile.slug}`} links={profile.relatedLinks} relatedDiscoverySlugs={["mock-theta-functions", "third-order-mock-theta-functions"]} />;
}
