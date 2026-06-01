import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/sections/PageHero";
import MissionVision from "@/components/sections/MissionVision";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTABanner from "@/components/sections/CTABanner";
import { Zap, Heart, Compass, Shield, TrendingUp, Users2 } from "lucide-react";

const VALUES = [
  { icon: Zap, title: "Speed", desc: "Time is currency. We move faster than the industry standard." },
  { icon: Shield, title: "Integrity", desc: "Transparent pricing, honest communication, zero hidden fees." },
  { icon: Heart, title: "Care", desc: "Your cargo, handled like it's our own. Every single shipment." },
  { icon: Compass, title: "Expertise", desc: "Routes, regulations, relationships — we've mastered all three." },
  { icon: TrendingUp, title: "Innovation", desc: "Tech-driven tracking, optimization, and supply-chain intelligence." },
  { icon: Users2, title: "Partnership", desc: "We grow when you grow. Long-term relationships, not transactions." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="ABOUT"
        highlight="FW WORLDWIDE"
        subtitle="FW Worldwide Pvt Ltd is an Indian logistics company offering integrated solutions in logistics and supply chain management."
      />

      {/* Intro */}
      <section className="bg-fw-off py-20 md:py-28" data-testid="about-intro">
        <div className="fw-container grid md:grid-cols-12 gap-10 items-start">
          <FadeIn className="md:col-span-5">
            <div>
              <p className="fw-label text-fw-red mb-4">— Who We Are</p>
              <h2 className="fw-heading text-5xl md:text-6xl text-fw-navy leading-[0.95]">
                Forward. Always.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-7">
            <div className="space-y-5 text-fw-navy/80 leading-relaxed">
              <p>
                Headquartered in Mumbai, FW Worldwide is a full-service logistics company delivering
                integrated air, sea, surface, and customs solutions across 180+ countries.
              </p>
              <p>
                From first-mile pickup to last-mile delivery, we design supply chains
                that move faster, cost less, and run with complete transparency. Our
                clients — from ambitious startups to Fortune 500s — trust us to keep
                their global operations moving with precision.
              </p>
              <p>
                With a 99.4% on-time delivery rate and a 24-hour express promise, we
                don't just ship freight. We move businesses forward.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Key stats */}
        <div className="fw-container mt-16 border-t border-b border-fw-navy/10 py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-fw-navy/10">
          {[
            { v: "25+", l: "Years Operating" },
            { v: "180+", l: "Countries Served" },
            { v: "40K+", l: "Clients Worldwide" },
            { v: "99.4%", l: "On-Time Record" },
          ].map((s, i) => (
            <FadeIn key={s.l} delay={i * 0.05}>
              <div className="px-4 md:px-8 text-center md:text-left">
                <p className="fw-heading text-5xl md:text-6xl text-fw-navy">{s.v}</p>
                <p className="fw-label text-fw-navy/60 mt-1 text-[0.65rem]">{s.l}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <MissionVision />
      <WhyChooseUs />

      {/* Values strip */}
      <section className="bg-fw-off py-20 md:py-28" data-testid="values-section">
        <div className="fw-container">
          <FadeIn>
            <div className="max-w-2xl mb-14">
              <p className="fw-label text-fw-red mb-4">— Team Values</p>
              <h2 className="fw-heading text-5xl md:text-7xl text-fw-navy leading-[0.95]">
                What we stand for.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-fw-navy/10">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.05}>
                <div
                  className="p-8 md:p-10 bg-white border-r border-b border-fw-navy/10 h-full hover:bg-fw-navy hover:text-white transition-colors group"
                  data-testid={`value-card-${i}`}
                >
                  <v.icon size={28} className="text-fw-red mb-6" strokeWidth={1.5} />
                  <h3 className="fw-heading text-3xl text-fw-navy group-hover:text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-fw-navy/70 group-hover:text-white/70 leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
