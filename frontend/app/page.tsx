import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-page">
      <div className="hero-card">
        <p className="eyebrow">Catering Search Platform</p>
        <h1>Find caterers that match your event and budget.</h1>
        <p className="hero-copy">
          Browse available caterers, compare cuisines and pricing, and shortlist the right option
          for your next function.
        </p>
        <Link href="/caterers" className="primary-link">
          Explore caterers
        </Link>
      </div>
    </main>
  );
}
