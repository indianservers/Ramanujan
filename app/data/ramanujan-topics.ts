export type RamanujanTopic = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  category: string;
  sections: { heading: string; body: string }[];
  links: { label: string; href: string }[];
};

export const ramanujanTopics: RamanujanTopic[] = [
  {
    slug: "daily-life",
    title: "Daily Life and Working Conditions",
    eyebrow: "Human Context",
    category: "Life",
    summary: "Ramanujan's mathematics grew inside ordinary pressures: food, money, illness, family expectations, long hours of work, and the cultural shock of Cambridge.",
    sections: [
      { heading: "Madras and Kumbakonam", body: "Before Cambridge, Ramanujan's working life was shaped by financial insecurity, limited formal employment and intense self-study. The archive should remember that his formulas were not produced in comfort." },
      { heading: "Food and Belonging", body: "In England, vegetarian practice, wartime shortages and distance from familiar religious and domestic routines added strain to an already difficult period." },
      { heading: "Work Rhythm", body: "Accounts of Ramanujan emphasize long periods of concentration, rapid formula-making and a style of recording results that often outran formal exposition." },
    ],
    links: [{ label: "Cambridge Years", href: "/life/cambridge-years" }, { label: "Return to India", href: "/life/return-to-india" }],
  },
  {
    slug: "education-and-self-study",
    title: "Education and Self-Study",
    eyebrow: "Formation",
    category: "Life",
    summary: "Ramanujan's education was brilliant but uneven: school success, college difficulty, scholarship loss and a self-made path through advanced mathematics.",
    sections: [
      { heading: "School Promise", body: "He showed extraordinary mathematical ability early, but the formal educational system rewarded broad examination performance rather than single-minded mathematical intensity." },
      { heading: "College Break", body: "His focus on mathematics contributed to failed examinations in other subjects and the loss of scholarships, leaving him outside the normal academic route." },
      { heading: "Independent Curriculum", body: "Ramanujan built a private mathematical education from books, notebooks, problems, correspondence and relentless calculation." },
    ],
    links: [{ label: "Life Timeline", href: "/timeline" }, { label: "The Three Notebooks", href: "/notebooks/three-notebooks" }],
  },
  {
    slug: "carr-synopsis",
    title: "Carr's Synopsis",
    eyebrow: "Influence",
    category: "Sources",
    summary: "G. S. Carr's Synopsis of Elementary Results helped shape Ramanujan's encounter with thousands of compact mathematical statements.",
    sections: [
      { heading: "A Compressed Book", body: "Carr's book presented results in terse form, often without expansive explanation. That format suited Ramanujan's appetite for identities and patterns." },
      { heading: "Style and Risk", body: "The book may help explain Ramanujan's compressed notebook style, but it should not be treated as the sole source of his originality." },
      { heading: "Archive Use", body: "A dedicated Carr page gives readers context for why Ramanujan's notebooks often look like dense result catalogues rather than standard textbooks." },
    ],
    links: [{ label: "Notebooks", href: "/notebooks" }, { label: "References", href: "/resources/references" }],
  },
  {
    slug: "early-patrons",
    title: "Patrons Before Hardy",
    eyebrow: "Early Support",
    category: "People",
    summary: "Before Hardy, Indian supporters helped Ramanujan survive, publish and reach mathematicians who could understand his work.",
    sections: [
      { heading: "Local Recognition", body: "Figures such as R. Ramachandra Rao, S. Narayana Iyer and V. Ramaswamy Aiyer belong in the story because they recognized talent before international fame arrived." },
      { heading: "Material Support", body: "Patronage mattered practically: money, introductions, institutional attention and encouragement helped keep Ramanujan's work alive." },
      { heading: "Historical Balance", body: "The Hardy story is central, but it can obscure the Indian network that first made Ramanujan visible." },
    ],
    links: [{ label: "1913 Letter", href: "/letters/ramanujan-to-hardy-1913" }, { label: "Life", href: "/life" }],
  },
  {
    slug: "indian-mathematical-society",
    title: "Indian Mathematical Society",
    eyebrow: "Publication Path",
    category: "Institutions",
    summary: "The Indian Mathematical Society gave Ramanujan an early public mathematical channel before Cambridge.",
    sections: [
      { heading: "Early Publication", body: "The society's journals and problem culture helped place Ramanujan's work before a mathematical audience in India." },
      { heading: "A Bridge", body: "Its network connected Ramanujan with people who could evaluate, circulate and support his unusual results." },
      { heading: "Archive Role", body: "This topic connects early Indian publication with later Cambridge recognition and published papers." },
    ],
    links: [{ label: "Published Papers", href: "/resources/published-papers" }, { label: "Resources", href: "/resources" }],
  },
  {
    slug: "hardy-littlewood-collaboration",
    title: "Hardy, Littlewood and Collaboration",
    eyebrow: "Cambridge",
    category: "People",
    summary: "Ramanujan's Cambridge work involved Hardy, Littlewood and a wider mathematical culture that translated intuition into proof and publication.",
    sections: [
      { heading: "Hardy's Role", body: "Hardy recognized Ramanujan's genius, helped bring him to Cambridge and collaborated on major work such as partition asymptotics." },
      { heading: "Littlewood's Presence", body: "Littlewood is part of the Cambridge mathematical setting and should be visible beside Hardy in the collaboration story." },
      { heading: "Different Strengths", body: "The collaboration joined Ramanujan's extraordinary intuition with Cambridge standards of proof, exposition and publication." },
    ],
    links: [{ label: "G. H. Hardy", href: "/life/gh-hardy" }, { label: "Cambridge Years", href: "/life/cambridge-years" }, { label: "Hardy-Ramanujan Formula", href: "/discoveries/hardy-ramanujan-asymptotic-formula" }],
  },
  {
    slug: "health-and-final-years",
    title: "Health and Final Years",
    eyebrow: "Final Period",
    category: "Life",
    summary: "Ramanujan's illness, wartime conditions and return to India are essential to understanding the final phase of his life and work.",
    sections: [
      { heading: "Illness and Uncertainty", body: "Historical medical accounts have debated the exact diagnosis. The site should avoid overconfident medical claims while describing the severe illness that shaped his final years." },
      { heading: "Wartime England", body: "Food shortages, climate, isolation and institutional constraints made recovery difficult during the Cambridge period." },
      { heading: "Return and Last Work", body: "After returning to India in 1919, Ramanujan continued producing important mathematics, including ideas around mock theta functions." },
    ],
    links: [{ label: "Return to India", href: "/life/return-to-india" }, { label: "Final Letter", href: "/letters/final-letter-to-hardy" }, { label: "Lost Notebook", href: "/notebooks/lost-notebook" }],
  },
  {
    slug: "janaki-ammal-later-life",
    title: "Janaki Ammal's Later Life",
    eyebrow: "Family",
    category: "People",
    summary: "Janaki Ammal's life after Ramanujan matters to the archive: memory, widowhood, survival and the public afterlife of his name.",
    sections: [
      { heading: "A Young Widow", body: "Janaki Ammal was widowed while still young. Her later life belongs to the human story of Ramanujan's legacy." },
      { heading: "Memory and Recognition", body: "As public interest in Ramanujan grew, Janaki's presence helped connect biography, family memory and institutional commemoration." },
      { heading: "Respectful Treatment", body: "This topic should avoid reducing her to a footnote and instead present her as a person within the historical record." },
    ],
    links: [{ label: "Janaki Ammal", href: "/life/janaki-ammal" }, { label: "Life", href: "/life" }],
  },
  {
    slug: "family-and-mother",
    title: "Family, Mother and Household",
    eyebrow: "Family",
    category: "Life",
    summary: "Ramanujan's household, mother Komalatammal, marriage and religious environment shaped the world around his mathematics.",
    sections: [
      { heading: "Komalatammal", body: "His mother was a powerful family presence. Her religious world, household decisions and relationship with Ramanujan belong in a fuller biography." },
      { heading: "Marriage and Distance", body: "Ramanujan's marriage to Janaki Ammal began in the customs of the time, with long periods of separation before a shared domestic life was possible." },
      { heading: "Household Context", body: "Family dynamics should be presented carefully: they are part of the record, but not simple explanations for mathematical genius." },
    ],
    links: [{ label: "Janaki Ammal", href: "/life/janaki-ammal" }, { label: "Namagiri Devi and Faith", href: "/life/namagiri-devi-and-faith" }],
  },
  {
    slug: "faith-and-intuition",
    title: "Faith and Mathematical Intuition",
    eyebrow: "Namagiri",
    category: "Life",
    summary: "Ramanujan connected his inspiration with Namagiri Thayar, but a careful archive distinguishes devotional testimony from mathematical method.",
    sections: [
      { heading: "Devotional Language", body: "Ramanujan's statements about inspiration should be treated respectfully as part of his self-understanding and cultural world." },
      { heading: "Mathematical Work", body: "Faith does not replace calculation, experimentation or proof. The archive can hold both the devotional context and the mathematics." },
      { heading: "Avoiding Myth", body: "The point is not to flatten the story into either mysticism or skepticism, but to show how belief, discipline and intuition coexisted." },
    ],
    links: [{ label: "Namagiri Devi and His Faith", href: "/life/namagiri-devi-and-faith" }, { label: "Myths vs Facts", href: "/ramanujan/myths-vs-facts" }],
  },
  {
    slug: "discovery-timeline",
    title: "Timeline of Discoveries",
    eyebrow: "Chronology",
    category: "Mathematics",
    summary: "A life timeline becomes more useful when it connects dates to mathematical themes: partitions, tau, pi series, continued fractions and mock theta functions.",
    sections: [
      { heading: "Before Cambridge", body: "Early notebook work includes many identities, series and continued fractions that later became part of the Ramanujan legend." },
      { heading: "Cambridge Period", body: "The Cambridge years brought collaboration, publication and major work in partitions, highly composite numbers and modular forms." },
      { heading: "Final Period", body: "The last phase is especially associated with mock theta functions and the material later known as the Lost Notebook." },
    ],
    links: [{ label: "Timeline", href: "/timeline" }, { label: "Discoveries", href: "/discoveries" }, { label: "Lost Notebook", href: "/notebooks/lost-notebook" }],
  },
  {
    slug: "manuscript-journey",
    title: "Manuscript Journey and Preservation",
    eyebrow: "Sources",
    category: "Notebooks",
    summary: "Ramanujan's manuscripts have their own history: preservation, editing, annotation, rediscovery and modern scholarly use.",
    sections: [
      { heading: "After Ramanujan", body: "The notebooks and papers passed through institutions, editors and mathematicians who worked to preserve and understand them." },
      { heading: "Editing", body: "A manuscript result often requires transcription, notation comparison, proof reconstruction and historical attribution." },
      { heading: "Why It Matters", body: "Understanding the manuscript journey helps readers see why exact source claims and editorial caution matter." },
    ],
    links: [{ label: "The Three Notebooks", href: "/notebooks/three-notebooks" }, { label: "Lost Notebook", href: "/notebooks/lost-notebook" }, { label: "References", href: "/resources/references" }],
  },
  {
    slug: "berndt-and-andrews",
    title: "Berndt, Andrews and Modern Annotation",
    eyebrow: "Scholarship",
    category: "Sources",
    summary: "Modern readers often meet Ramanujan through the annotation and interpretation of George Andrews, Bruce Berndt and other scholars.",
    sections: [
      { heading: "George Andrews", body: "Andrews is central to the story of the Lost Notebook's rediscovery and modern q-series scholarship." },
      { heading: "Bruce Berndt", body: "Berndt's extensive work on Ramanujan's notebooks helped verify, annotate and explain large bodies of manuscript material." },
      { heading: "Archive Function", body: "This topic reminds readers that Ramanujan's legacy includes a century of mathematical scholarship after him." },
    ],
    links: [{ label: "Lost Notebook", href: "/notebooks/lost-notebook" }, { label: "Further Reading", href: "/resources/further-reading" }],
  },
  {
    slug: "modern-impact",
    title: "Modern Impact",
    eyebrow: "Afterlife",
    category: "Legacy",
    summary: "Ramanujan's influence reaches modern number theory, modular forms, black-hole entropy research, moonshine, algorithms for pi and quantum modular forms.",
    sections: [
      { heading: "Mock Modular World", body: "Mock theta functions helped lead later mathematicians toward mock modular forms and harmonic Maass forms." },
      { heading: "Physics and Moonshine", body: "Ideas connected with modular forms, partitions and q-series appear in mathematical physics, black-hole entropy research and moonshine-related mathematics." },
      { heading: "Computation", body: "Ramanujan-type series helped inspire fast algorithms for pi and continue to influence computational mathematics." },
    ],
    links: [{ label: "Legacy", href: "/legacy" }, { label: "Mock Theta Functions", href: "/discoveries/mock-theta-functions" }, { label: "1/pi Series", href: "/discoveries/ramanujan-one-over-pi-series" }],
  },
  {
    slug: "institutions-and-prizes",
    title: "Institutions, Prizes and Memorials",
    eyebrow: "Commemoration",
    category: "Legacy",
    summary: "Ramanujan's name lives through prizes, institutes, memorial houses, museums, stamps and public mathematical culture.",
    sections: [
      { heading: "Prizes", body: "The SASTRA Ramanujan Prize and other honors keep his name connected with young mathematical talent." },
      { heading: "Institutions", body: "Institutes, university programs and memorial spaces in India and abroad preserve different parts of his legacy." },
      { heading: "Public Memory", body: "Commemoration helps the public encounter Ramanujan, but the archive should always bring memory back to the mathematics and historical person." },
    ],
    links: [{ label: "Legacy", href: "/legacy" }, { label: "Resources", href: "/resources" }],
  },
  {
    slug: "popular-culture",
    title: "Popular Culture and Public Memory",
    eyebrow: "Culture",
    category: "Legacy",
    summary: "Books, films and documentaries made Ramanujan widely known, but popular retellings need careful historical framing.",
    sections: [
      { heading: "Biographies and Film", body: "Works such as The Man Who Knew Infinity introduced Ramanujan to broad audiences while simplifying some historical and mathematical detail." },
      { heading: "Public Symbol", body: "Ramanujan often becomes a symbol of genius, intuition and overlooked talent. That symbolism is powerful, but incomplete." },
      { heading: "Archive Balance", body: "The site can welcome popular interest while guiding readers toward sources, mathematics and historical nuance." },
    ],
    links: [{ label: "Further Reading", href: "/resources/further-reading" }, { label: "Myths vs Facts", href: "/ramanujan/myths-vs-facts" }],
  },
  {
    slug: "myths-vs-facts",
    title: "Myths vs Facts",
    eyebrow: "Critical Reading",
    category: "Guide",
    summary: "Ramanujan's story attracts myths. A responsible archive separates wonder from exaggeration.",
    sections: [
      { heading: "1729", body: "The taxi-cab story is famous, but Ramanujan did not discover 1729 in that moment; he recognized a special property immediately." },
      { heading: "Dreams and Proofs", body: "Devotional accounts matter, but they should not erase calculation, self-study, experimentation or later proof work." },
      { heading: "Untrained Genius", body: "Ramanujan lacked a conventional advanced degree, but he was not mathematically empty-handed: he studied deeply, corresponded and built a powerful private discipline." },
    ],
    links: [{ label: "Hardy-Ramanujan Number 1729", href: "/discoveries/hardy-ramanujan-number-1729" }, { label: "Faith and Intuition", href: "/ramanujan/faith-and-intuition" }],
  },
  {
    slug: "glossary-expansion",
    title: "Beginner Glossary Path",
    eyebrow: "Learning",
    category: "Guide",
    summary: "Readers need gentle explanations of q-series, modular forms, partitions, theta functions, congruences, asymptotics and continued fractions.",
    sections: [
      { heading: "Why It Matters", body: "A glossary turns the archive from a catalogue into a learning environment, especially for students and general readers." },
      { heading: "Core Terms", body: "Partitions, congruences, q-series, theta functions, modular forms, asymptotic formulas and continued fractions should all have plain-language explanations." },
      { heading: "Next Step", body: "This topic links readers into the existing glossary and discovery categories while marking glossary expansion as an ongoing editorial task." },
    ],
    links: [{ label: "Search", href: "/search" }, { label: "Discoveries", href: "/discoveries" }, { label: "Formulas", href: "/formulas" }],
  },
  {
    slug: "interactive-learning",
    title: "Interactive Learning Ideas",
    eyebrow: "Learning Tools",
    category: "Guide",
    summary: "The archive can grow into hands-on learning with small tools for partitions, 1729, continued fractions and pi-series convergence.",
    sections: [
      { heading: "Partition Explorer", body: "A simple partition calculator can show p(n), partition lists for small n and the meaning of congruences." },
      { heading: "1729 Explorer", body: "A taxicab-number tool can let visitors search sums of two cubes and understand why 1729 is special." },
      { heading: "Convergence Tools", body: "Continued fraction and pi-series demos can show why Ramanujan's formulas feel so startling." },
    ],
    links: [{ label: "Partition Congruences", href: "/discoveries/partition-congruences" }, { label: "1729", href: "/discoveries/hardy-ramanujan-number-1729" }, { label: "1/pi Series", href: "/discoveries/ramanujan-one-over-pi-series" }],
  },
  {
    slug: "primary-source-gallery",
    title: "Primary Source Gallery",
    eyebrow: "Sources",
    category: "Sources",
    summary: "A source gallery can gather letters, notebook images, published-paper references and citation notes in one place.",
    sections: [
      { heading: "Letters", body: "Ramanujan's correspondence with Hardy gives readers a direct path into the human and mathematical drama of recognition." },
      { heading: "Notebooks", body: "Notebook images and manuscript descriptions should be paired with careful notes about what is and is not being transcribed." },
      { heading: "Published Papers", body: "Papers provide a more formal record of selected results and collaborations, complementing the manuscript archive." },
    ],
    links: [{ label: "Letters", href: "/letters" }, { label: "Notebooks", href: "/notebooks" }, { label: "Published Papers", href: "/resources/published-papers" }, { label: "References", href: "/resources/references" }],
  },
];

export function getRamanujanTopic(slug: string) {
  return ramanujanTopics.find((topic) => topic.slug === slug);
}
