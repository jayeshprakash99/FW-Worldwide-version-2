import FadeIn from "@/components/FadeIn";

const AIRLINES = [
  "Qatar Airways", "Emirates", "British Airways", "Lufthansa", "Air France",
  "IndiGo", "Turkish Airlines", "Saudia", "Oman Air", "Cathay Pacific",
  "Thai Airways", "Etihad", "Air India",
];

const SHIPPING = [
  "Maersk", "MSC", "Evergreen", "PIL", "COSCO",
  "CMA CGM", "HMM", "ONE", "Hapag-Lloyd", "Emirates Shipping",
];

const LogoTile = ({ name, index, group }) => (
  <FadeIn delay={index * 0.03}>
    <div
      className="group h-24 md:h-28 border border-black/10 bg-white flex items-center justify-center px-4 hover:border-fw-red hover:shadow-md transition-all"
      data-testid={`carrier-${group}-${index}`}
    >
      <span className="fw-heading text-xl md:text-2xl text-fw-navy group-hover:text-fw-red transition-colors text-center leading-tight">
        {name}
      </span>
    </div>
  </FadeIn>
);

export default function PreferredCarriers({ compact = false }) {
  return (
    <section className="bg-white py-20 md:py-28" data-testid="carriers-section">
      <div className="fw-container">
        {!compact && (
          <FadeIn>
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <p className="fw-label text-fw-red mb-4">— Preferred Carriers</p>
              <h2 className="fw-heading text-5xl md:text-7xl text-fw-navy">
                Global network.<br />
                <span className="text-fw-red">Trusted partners.</span>
              </h2>
            </div>
          </FadeIn>
        )}

        <div className="mb-14">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="fw-heading text-3xl md:text-4xl text-fw-navy">Airlines</h3>
              <div className="h-[3px] flex-1 bg-fw-yellow" />
              <span className="fw-label text-fw-navy/60 text-[0.65rem]">{AIRLINES.length} PARTNERS</span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {AIRLINES.map((n, i) => <LogoTile key={n} name={n} index={i} group="airline" />)}
          </div>
        </div>

        <div>
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="fw-heading text-3xl md:text-4xl text-fw-navy">Shipping Lines</h3>
              <div className="h-[3px] flex-1 bg-fw-yellow" />
              <span className="fw-label text-fw-navy/60 text-[0.65rem]">{SHIPPING.length} PARTNERS</span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {SHIPPING.map((n, i) => <LogoTile key={n} name={n} index={i} group="ship" />)}
          </div>
        </div>
      </div>
    </section>
  );
}
