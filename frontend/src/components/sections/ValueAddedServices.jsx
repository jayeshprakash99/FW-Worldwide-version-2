import FadeIn from "@/components/FadeIn";
import {
  Truck, Package, Warehouse, Boxes, ShieldCheck, Container, Layers, PackageCheck
} from "lucide-react";

const ITEMS = [
  { icon: Truck, title: "Pick-Ups", desc: "On-demand freight collection from your facility." },
  { icon: Layers, title: "Palletization", desc: "Uniform pallet builds for safe stacking & transit." },
  { icon: PackageCheck, title: "Order Fulfillment", desc: "Pick, pack, label, and ship with accuracy." },
  { icon: Container, title: "Container Transloading", desc: "Efficient container-to-container cargo moves." },
  { icon: Package, title: "Packaging / Repackaging", desc: "Custom packaging to protect every shipment." },
  { icon: Boxes, title: "Consolidation", desc: "LCL consolidation for optimized freight costs." },
  { icon: ShieldCheck, title: "Cargo Insurance", desc: "Full coverage against loss, theft, damage." },
  { icon: Warehouse, title: "Short / Long Term Storage", desc: "Secure warehouse space on flexible terms." },
];

export default function ValueAddedServices() {
  return (
    <section className="bg-fw-navy text-white py-20 md:py-28 relative overflow-hidden" data-testid="value-added-section">
      <div className="fw-container">
        <FadeIn>
          <p className="fw-label text-fw-yellow mb-4">— Value-Added Services</p>
          <h2 className="fw-heading text-5xl md:text-7xl max-w-3xl">
            Beyond freight.<br />
            <span className="text-fw-yellow">Built to scale.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mt-14 border border-white/10">
          {ITEMS.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.04}>
              <div
                className="bg-fw-navy p-7 md:p-9 h-full hover:bg-fw-navy-deep transition-colors group"
                data-testid={`vas-card-${i}`}
              >
                <div className="h-11 w-11 bg-fw-red/10 border border-fw-red/40 flex items-center justify-center mb-6 group-hover:bg-fw-red transition-colors">
                  <it.icon size={20} className="text-fw-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="fw-heading text-2xl mb-2">{it.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
