import { lifeProfiles } from "../../data/archive";
import { EditorialPage } from "../../shared/EditorialPage";

export default function NamagiriPage() {
  const profile = lifeProfiles.find((item) => item.slug === "namagiri-devi-and-faith")!;
  return <EditorialPage active="Life" eyebrow="Faith" title={profile.title} subtitle={profile.subtitle} image={profile.image} imageAlt={profile.alt} summary={profile.summary} sections={profile.sections} citation={profile.citation} saveId={`life:${profile.slug}`} links={profile.relatedLinks} />;
}
