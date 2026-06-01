import FadeIn from "@/components/FadeIn";
import { Award, Clock, Users } from "lucide-react";

const ITEMS = [
  {
    icon: Award,
    title: "Expertise",
    desc: "Decades of combined experience across air, sea, and surface logistics. We know the routes, regulations, and the right moves — across 180+ countries.",
    stat: "25+ YRS",
  },
  {
    icon: Clock,
    title: "Reliability",
    desc: "99.4% on-time delivery rate, full tracking transparency, and a 24-hour express promise backed by industry-leading carrier partnerships.",
    stat: "99.4%",
  },
  {
    icon: Users,
    title: "Customer Focus",
    desc: "Dedicated account managers, 24/7 operations support, and tailored supply-chain programs engineered around your business — not ours.",
    stat: "24/7",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-fw-navy-deep text-white py-20 md:py-28" data-testid="why-choose-us-section">
      <div className="fw-container">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="fw-label text-fw-yellow mb-4">— Why Choose Us</p>
              <h2 className="fw-heading text-5xl md:text-7xl max-w-xl">
                Three pillars.<br />One promise.
              </h2>
            </div>
            <p className="text-white/60 max-w-md text-sm leading-relaxed">
              Logistics should feel invisible to your customers and effortless to your team.
              That's the standard we deliver against — on every shipment.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {ITEMS.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.08}>
              <div
                className="bg-fw-navy border-l-4 border-fw-yellow p-8 md:p-10 h-full hover:border-fw-red transition-colors group"
                data-testid={`why-card-${i}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <it.icon size={30} className="text-fw-yellow group-hover:text-fw-red transition-colors" strokeWidth={1.5} />
                  <span className="fw-label text-fw-yellow/70 text-[0.65rem]">{it.stat}</span>
                </div>
                <h3 className="fw-heading text-3xl md:text-4xl mb-4">{it.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
