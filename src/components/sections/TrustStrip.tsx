"use client";

export function TrustStrip() {
  const scrollToReviews = () => {
    document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background border-y border-border/30 py-4 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <p className="text-foreground/60 text-sm tracking-wide">
          12+ Years&nbsp;&nbsp;·&nbsp;&nbsp;5,000+ Clients&nbsp;&nbsp;·&nbsp;&nbsp;Olaplex Certified&nbsp;&nbsp;·&nbsp;&nbsp;Beverly Hills&nbsp;&nbsp;·&nbsp;&nbsp;98% Client Retention
        </p>
        <button
          onClick={scrollToReviews}
          className="text-accent text-sm font-semibold tracking-wide hover:text-accent-soft transition-colors flex items-center gap-1.5 shrink-0"
        >
          Read Reviews
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
