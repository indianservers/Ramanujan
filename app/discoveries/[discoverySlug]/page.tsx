import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { discoveries, getDiscovery } from "../../data/archive";
import { DiscoveryDetail } from "../../shared/DiscoveryDetail";
import { SiteFooter } from "../../shared/SiteFooter";
import { SiteHeader } from "../../shared/SiteHeader";

export function generateStaticParams() {
  return discoveries.map((discovery) => ({ discoverySlug: discovery.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ discoverySlug: string }> }): Promise<Metadata> {
  const { discoverySlug } = await params;
  const discovery = getDiscovery(discoverySlug);
  if (!discovery) return {};
  return {
    title: discovery.title,
    description: discovery.summary,
    openGraph: {
      title: `${discovery.title} | The Ramanujan Universe`,
      description: discovery.summary,
      images: [],
    },
    twitter: {
      title: `${discovery.title} | The Ramanujan Universe`,
      description: discovery.summary,
      images: [],
    },
  };
}

export default async function DiscoveryPage({ params }: { params: Promise<{ discoverySlug: string }> }) {
  const { discoverySlug } = await params;
  const discovery = getDiscovery(discoverySlug);
  if (!discovery) notFound();
  return (
    <>
      <SiteHeader active="Discoveries" />
      <DiscoveryDetail discovery={discovery} />
      <SiteFooter />
    </>
  );
}
