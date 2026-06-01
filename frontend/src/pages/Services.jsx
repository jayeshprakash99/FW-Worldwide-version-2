import { ArrowRight, Plane, Ship, Truck, FileCheck, ShieldCheck, Activity, MapPinned, AlertTriangle } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/sections/PageHero";
import ValueAddedServices from "@/components/sections/ValueAddedServices";
import CTABanner from "@/components/sections/CTABanner";

const FEATURED = [
  {
    icon: Plane,
    title: "Air Freight",
    tag: "MODE · 01",
    image: "https://images.unsplash.com/photo-1733932911605-00096aff8b4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwzfHxjYXJnbyUyMGFpcnBsYW5lJTIwZmx5aW5nfGVufDB8fHx8MTc3Nzk4MzcxOHww&ixlib=rb-4.1.0&q=85",
    desc: "Fast, reliable air cargo — priority express, consolidated, charter, and dangerous-goods handling. Direct relationships with 13+ airline partners across 180+ destinations keep your critical freight flying on schedule.",
    points: ["Express & Standard Services", "Temperature-Controlled Cargo", "Perishables & Pharmaceutical", "Charter & Project Moves"],
  },
  {
    icon: Ship,
    title: "Sea Freight",
    tag: "MODE · 02",
    image: "https://images.unsplash.com/photo-1773831061365-95e4328cee9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHw0fHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMGxvZ2lzdGljc3xlbnwwfHx8fDE3Nzc5ODM3MTh8MA&ixlib=rb-4.1.0&q=85",
    desc: "Cost-efficient ocean freight with FCL and LCL options. Global port coverage through Maersk, MSC, COSCO, CMA CGM, and more. Optimized routing and consolidation keep your margins healthy.",
    points: ["FCL / LCL Shipments", "Reefer & Special Cargo", "Break-Bulk & Project Cargo", "Port-to-Port / Door Services"],
  },
  {
    icon: FileCheck,
    title: "Custom Clearance",
    tag: "MODE · 03",
    image: "https://images.pexels.com/photos/11935038/pexels-photo-11935038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "In-house customs brokerage across India's major ports and airports. We handle documentation, duty optimization, and regulatory compliance so your cargo clears faster.",
    points: ["Import / Export Documentation", "Duty & Tariff Advisory", "HSN / Compliance Audit", "AEO & Licensed Broker Network"],
  },
  {
    icon: Truck,
    title: "Door to Door Delivery",
    tag: "MODE · 04",
    image: "https://images.pexels.com/photos/16300654/pexels-photo-16300654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Complete supply-chain execution — pickup, line-haul, customs, last-mile. One shipment, one team, one point of accountability.",
    points: ["Pickup & Last-Mile", "Cross-Dock & Transloading", "Multi-Modal Routing", "Real-Time Tracking"],
  },
];

const SAFETY = [
  { icon: ShieldCheck, title: "Driver Training", desc: "Certified driver programs covering defensive driving, hazmat handling, and route safety protocols." },
  { icon: Activity, title: "Vehicle Safety", desc: "Scheduled maintenance, pre-trip inspections, and fleet-wide compliance monitoring on every vehicle." },
  { icon: MapPinned, title: "GPS Tracking", desc: "Real-time shipment visibility with geofencing and automated alerts for every move — air, sea, or road." },
  { icon: AlertTriangle, title: "Emergency Preparedness", desc: "24/7 incident response team, documented contingency plans, and cargo insurance on every consignment." },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="OUR"
        highlight="SERVICES"
        subtitle="Integrated logistics across air, sea, customs, and surface — engineered for speed, accuracy, and total supply-chain control."
      />

      {/* Featured services */}
      <section className="bg-fw-off py-20 md:py-28" data-testid="featured-services">
        <div className="fw-container space-y-20 md:space-y-28">
          {FEATURED.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <FadeIn key={f.title}>
                <div className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="md:col-span-6 relative">
                    <div className="aspect-[4/3] overflow-hidden bg-fw-navy">
                      <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-0 left-0 bg-fw-red text-white px-4 py-2">
                      <span className="fw-label text-[0.65rem]">{f.tag}</span>
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className="h-12 w-12 bg-fw-navy flex items-center justify-center mb-6">
                      <f.icon size={22} className="text-fw-yellow" strokeWidth={1.5} />
                    </div>
                    <h2 className="fw-heading text-5xl md:text-6xl text-fw-navy mb-5 leading-[0.95]">{f.title}</h2>
                    <p className="text-fw-navy/70 leading-relaxed mb-6">{f.desc}</p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {f.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-fw-navy">
                          <ArrowRight size={14} className="text-fw-red mt-1 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <ValueAddedServices />

      {/* Safety */}
      <section className="bg-fw-off py-20 md:py-28" data-testid="safety-section">
        <div className="fw-container">
          <FadeIn>
            <div className="max-w-2xl mb-14">
              <p className="fw-label text-fw-red mb-4">— Safety & Compliance</p>
              <h2 className="fw-heading text-5xl md:text-7xl text-fw-navy leading-[0.95]">
                Safety isn't a feature.<br />
                <span className="text-fw-red">It's the foundation.</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5">
            {SAFETY.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.06}>
                <div
                  className="bg-white border border-fw-navy/10 p-8 md:p-10 flex gap-5 hover:border-fw-red transition-colors"
                  data-testid={`safety-item-${i}`}
                >
                  <div className="h-12 w-12 bg-fw-navy shrink-0 flex items-center justify-center">
                    <s.icon size={20} className="text-fw-yellow" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="fw-heading text-2xl md:text-3xl text-fw-navy mb-2">{s.title}</h3>
                    <p className="text-sm text-fw-navy/70 leading-relaxed">{s.desc}</p>
                  </div>
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
