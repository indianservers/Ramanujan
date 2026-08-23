import { notFound } from "next/navigation";
import { discoveries, getDiscovery } from "../../data/archive";
import { DiscoveryDetail } from "../../shared/DiscoveryDetail";
import { SiteFooter } from "../../shared/SiteFooter";
import { SiteHeader } from "../../shared/SiteHeader";

export function generateStaticParams() {
  return discoveries.map((discovery) => ({ discoverySlug: discovery.slug }));
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
