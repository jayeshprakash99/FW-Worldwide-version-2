import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Plane, Ship, Truck } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServicesStrip from "@/components/sections/ServicesStrip";
import ValueAddedServices from "@/components/sections/ValueAddedServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PreferredCarriers from "@/components/sections/PreferredCarriers";
import MissionVision from "@/components/sections/MissionVision";
import CTABanner from "@/components/sections/CTABanner";

const STATS = [
  { value: "180+", label: "Countries Served" },
  { value: "40K+", label: "Clients Worldwide" },
  { value: "99.4%", label: "On-Time Delivery" },
  { value: "24h", label: "Express Turnaround" },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1769233777331-6ffc4a449ec9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwyfHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMGxvZ2lzdGljc3xlbnwwfHx8fDE3Nzc5ODM3MTh8MA&ixlib=rb-4.1.0&q=85";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-fw-navy text-white overflow-hidden" data-testid="home-hero">
        <div className="absolute inset-0 opacity-40">
          <img src={HERO_IMAGE} alt="Global freight" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-fw-navy via-fw-navy/90 to-fw-navy/30" />
        </div>

        <div className="fw-container pt-16 md:pt-24 pb-20 md:pb-28 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-12 col-span-12">
              <FadeIn>
                <div
                  className="inline-flex items-start gap-4 bg-fw-red/95 border-l-4 border-fw-yellow pl-5 pr-6 py-4 mb-8 max-w-3xl"
                  data-testid="rebrand-banner"
                >
                  <span className="fw-label text-fw-navy text-[0.65rem] bg-fw-yellow px-2 py-1 mt-0.5 shrink-0">NEW</span>
                  <div>
                    <p className="fw-heading text-xl md:text-2xl text-fw-navy leading-tight tracking-wide">
                      Freight Wing Logistics is now <span className="text-white">FW Worldwide</span>
                    </p>
                    <p className="text-fw-navy/85 text-xs md:text-sm mt-1.5 leading-snug">
                      As we continue to expand our global presence, our new identity reflects our commitment to delivering seamless logistics solutions across the world.
                    </p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.05}>
                <p className="fw-label text-fw-yellow mb-6 flex items-center gap-2">
                  <MapPin size={12} /> Mumbai · Global Operations
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="fw-heading text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.88]">
                  Logistics built<br />for <span className="text-fw-red">business.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="mt-7 text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
                  FW Worldwide moves your cargo across air, sea, and surface — with
                  the precision, transparency, and speed modern commerce demands.
                </p>
              </FadeIn>
              <FadeIn delay={0.35}>
                <div className="flex flex-wrap gap-3 mt-9">
                  <Link to="/contact" className="fw-btn-primary" data-testid="hero-get-quote">
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                  <Link to="/services" className="fw-btn-outline" data-testid="hero-track-shipment">
                    Explore Services
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-fw-navy-deep">
          <div className="fw-container grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {STATS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.05}>
                <div className="py-7 px-4 md:px-6 text-center md:text-left" data-testid={`hero-stat-${i}`}>
                  <p className="fw-heading text-4xl md:text-5xl text-white">{s.value}</p>
                  <p className="fw-label text-white/50 mt-1 text-[0.65rem]">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Floating mode icons bar */}
      <section className="bg-fw-yellow">
        <div className="fw-container py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-fw-navy">
          <span className="fw-label">AIR FREIGHT</span>
          <span className="h-1 w-1 rounded-full bg-fw-navy/40" />
          <span className="fw-label">SEA FREIGHT</span>
          <span className="h-1 w-1 rounded-full bg-fw-navy/40" />
          <span className="fw-label">ROAD TRANSPORT</span>
          <span className="h-1 w-1 rounded-full bg-fw-navy/40" />
          <span className="fw-label">CUSTOMS CLEARANCE</span>
          <span className="h-1 w-1 rounded-full bg-fw-navy/40" />
          <span className="fw-label">WAREHOUSING</span>
        </div>
      </section>

      <ServicesStrip />
      <ValueAddedServices />
      <WhyChooseUs />
      <PreferredCarriers />
      <MissionVision />
      <CTABanner />
    </>
  );
}
