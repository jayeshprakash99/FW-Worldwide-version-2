import { Link } from "react-router-dom";
import { ArrowRight, Ship, Plane, Truck, FileCheck } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const SERVICES = [
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Priority air cargo to 180+ destinations. Express, consolidated, and charter options.",
    dark: false,
    tag: "S-01",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    desc: "FCL and LCL ocean freight with full global port coverage and competitive rates.",
    dark: true,
    tag: "S-02",
  },
  {
    icon: FileCheck,
    title: "Custom Clearance",
    desc: "End-to-end customs brokerage and documentation. Fast, compliant, hassle-free.",
    dark: false,
    tag: "S-03",
  },
  {
    icon: Truck,
    title: "Door to Door",
    desc: "Seamless pickup-to-delivery logistics including last-mile and cross-docking.",
    dark: true,
    tag: "S-04",
  },
];

export default function ServicesStrip() {
  return (
    <section className="bg-fw-off py-20 md:py-28" data-testid="services-strip">
      <div className="fw-container">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="fw-label text-fw-red mb-4">— Core Services</p>
              <h2 className="fw-heading text-5xl md:text-7xl text-fw-navy max-w-2xl">
                Every mode.<br />
                <span className="text-fw-red">Every route.</span>
              </h2>
            </div>
            <Link to="/services" className="fw-label text-fw-navy hover:text-fw-red inline-flex items-center gap-2">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-fw-navy/10">
          {SERVICES.map((s, i) => {
            const dark = s.dark;
            return (
              <FadeIn key={s.title} delay={i * 0.06}>
                <div
                  className={`group p-8 md:p-10 h-full min-h-[340px] flex flex-col justify-between relative overflow-hidden transition-colors ${
                    dark
                      ? "bg-fw-navy text-white hover:bg-fw-red"
                      : "bg-white text-fw-navy hover:bg-fw-red hover:text-white"
                  }`}
                  data-testid={`service-card-${i}`}
                >
                  <div className="flex items-start justify-between mb-10">
                    <div className={`h-12 w-12 flex items-center justify-center ${dark ? "bg-white/10" : "bg-fw-navy/5"} group-hover:bg-white/15 transition-colors`}>
                      <s.icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className={`fw-label text-[0.65rem] ${dark ? "text-white/40" : "text-fw-navy/40"} group-hover:text-white/70`}>
                      {s.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="fw-heading text-4xl md:text-5xl mb-4 leading-[0.95]">{s.title}</h3>
                    <p className={`text-sm leading-relaxed ${dark ? "text-white/70" : "text-fw-navy/70"} group-hover:text-white/90`}>
                      {s.desc}
                    </p>
                    <div className="mt-6 flex items-center gap-2 fw-label text-[0.7rem]">
                      Learn More <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
