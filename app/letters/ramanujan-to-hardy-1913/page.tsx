import { letters } from "../../data/archive";
import { EditorialPage } from "../../shared/EditorialPage";

export default function RamanujanToHardyPage() {
  const letter = letters.find((item) => item.slug === "ramanujan-to-hardy-1913")!;
  return <EditorialPage active="Life" eyebrow="1913 Correspondence" title={letter.title} subtitle="A letter from Madras that opened the path to Cambridge." image={letter.image} imageAlt="Ramanujan letter to Hardy" summary={letter.context} citation={letter.citation} saveId={`letter:${letter.slug}`} relatedDiscoverySlugs={letter.relatedDiscoverySlugs} links={letter.relatedLinks} sections={[
    { heading: "Circumstances in Madras", body: "Ramanujan was working in Madras and seeking recognition for mathematical results he had developed largely outside formal academic structures." },
    { heading: "Why Hardy", body: "Hardy was a leading Cambridge mathematician in analytic number theory, making him a plausible recipient for results that had not found a home elsewhere." },
    { heading: "Results Enclosed", body: "The letter contained formulas and assertions from Ramanujan's notebooks. This page summarizes the context rather than fabricating a full transcription." },
    { heading: "Hardy's Reaction", body: "Hardy recognized mathematical originality in the letter and helped make possible Ramanujan's move to Cambridge." },
    { heading: "Collaboration", body: "The correspondence led to collaboration on partitions, asymptotic formulas, number theory and related fields." },
  ]} />;
}
