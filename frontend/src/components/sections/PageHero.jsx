export default function PageHero({ eyebrow, title, highlight, subtitle, image }) {
  return (
    <section className="relative bg-fw-navy text-white overflow-hidden" data-testid="page-hero">
      {/* Red top stripe */}
      <div className="h-2 bg-fw-red" />
      {image && (
        <div className="absolute inset-0 opacity-25">
          <img src={image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-fw-navy via-fw-navy/80 to-transparent" />
        </div>
      )}
      <div className="fw-container py-20 md:py-32 relative">
        <p className="fw-label text-fw-yellow mb-5">— {eyebrow}</p>
        <h1 className="fw-heading text-6xl md:text-8xl lg:text-9xl leading-[0.9] max-w-4xl">
          {title}{" "}
          {highlight && <span className="text-fw-red">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="text-white/70 mt-6 md:mt-8 text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
