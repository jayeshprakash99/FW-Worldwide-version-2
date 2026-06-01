import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function CTABanner() {
  return (
    <section className="bg-fw-red relative overflow-hidden" data-testid="cta-banner">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay fw-grain" />
      <div className="fw-container py-20 md:py-28 relative">
        <FadeIn>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <p className="fw-label text-white/80 mb-4">— Let's Move</p>
              <h2 className="fw-heading text-6xl md:text-8xl text-white leading-[0.9]">
                Ready to<br />ship?
              </h2>
              <p className="text-white/80 mt-5 text-base md:text-lg max-w-lg">
                Get a personalized freight quote in under 24 hours. Air, sea, or road —
                we'll design the route and manage the move.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="fw-btn-outline" data-testid="cta-get-quote">
                Get a Quote <ArrowRight size={16} />
              </Link>
              <a href="tel:+912268464030" className="fw-btn-dark" data-testid="cta-call-us">
                Call Us Now
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
