import Link from "next/link";
import { HeritageIcon } from "./HeritageIcon";

const appUrl = "https://play.google.com/store/apps/details?id=com.indianservers.aiexplorer";

export function AppDownloadCta() {
  return (
    <section className="app-download-cta sacred-card" aria-labelledby="maths-app-title">
      <div>
        <p className="eyebrow">Continue Learning</p>
        <h2 id="maths-app-title">Download Our Maths App</h2>
        <p>
          Practice mathematics, explore AI-powered learning tools, and keep studying beyond the Ramanujan archive.
        </p>
      </div>
      <Link prefetch={false} className="button button-primary" href={appUrl} target="_blank" rel="noreferrer">
        <HeritageIcon name="book" />
        Get the Maths App
      </Link>
    </section>
  );
}

