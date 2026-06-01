import FadeIn from "@/components/FadeIn";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="grid md:grid-cols-2" data-testid="mission-vision-section">
      <FadeIn>
        <div className="bg-fw-navy text-white p-10 md:p-16 lg:p-20 relative min-h-[420px] flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-9 w-9 bg-fw-red flex items-center justify-center">
              <Target size={18} className="text-white" />
            </div>
            <p className="fw-label text-fw-yellow">— Mission</p>
          </div>
          <div>
            <h3 className="fw-heading text-5xl md:text-6xl mb-6 leading-[0.95]">
              Move freight.<br />Move business forward.
            </h3>
            <p className="text-white/70 leading-relaxed max-w-md">
              To deliver integrated, end-to-end logistics solutions that keep global
              commerce moving — faster, safer, and smarter than yesterday.
            </p>
          </div>
          <div className="mt-10 h-1 w-16 bg-fw-yellow" />
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="bg-white text-fw-navy p-10 md:p-16 lg:p-20 relative min-h-[420px] flex flex-col justify-between border-t md:border-t-0 md:border-l border-black/5">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-9 w-9 bg-fw-yellow flex items-center justify-center">
              <Eye size={18} className="text-fw-navy" />
            </div>
            <p className="fw-label text-fw-red">— Vision</p>
          </div>
          <div>
            <h3 className="fw-heading text-5xl md:text-6xl mb-6 leading-[0.95]">
              The most trusted name<br />in global freight.
            </h3>
            <p className="text-fw-navy/70 leading-relaxed max-w-md">
              To become the benchmark logistics partner for ambitious businesses —
              recognized for reliability, transparency, and relentless customer obsession.
            </p>
          </div>
          <div className="mt-10 h-1 w-16 bg-fw-red" />
        </div>
      </FadeIn>
    </section>
  );
}
