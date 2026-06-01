import { Phone, Mail, MapPin, Globe, Clock } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/sections/PageHero";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="LET'S MOVE"
        highlight="FORWARD."
        subtitle="Reach out to a freight specialist directly by phone or email. We respond within 24 hours — guaranteed."
      />

      <section className="bg-fw-off py-20 md:py-28" data-testid="contact-section">
        <div className="fw-container">
          <FadeIn>
            <div className="bg-fw-navy text-white p-8 md:p-14 lg:p-16" data-testid="contact-info-card">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5">
                  <p className="fw-label text-fw-red mb-4">— Reach Us</p>
                  <h2 className="fw-heading text-5xl md:text-6xl leading-[0.95] mb-6">
                    Talk to a<br />freight specialist.
                  </h2>
                  <p className="text-white/70 leading-relaxed max-w-md">
                    Whether it's a quote, an enquiry, or an urgent shipment —
                    our team is one call away.
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-sm text-white/70">
                    <Clock size={16} className="text-fw-red" />
                    <span>Mon — Sat · 09:00 to 19:00 IST</span>
                  </div>
                </div>

                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="flex gap-4" data-testid="contact-phone">
                    <div className="h-11 w-11 bg-fw-red flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-fw-navy" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="fw-label text-white/50 text-[0.65rem] mb-2">PHONE</p>
                      <a href="tel:+912268464030" className="block hover:text-fw-red transition-colors">+91 22-68464030</a>
                      <a href="tel:+919619639221" className="block hover:text-fw-red transition-colors">+91 96196 39221</a>
                    </div>
                  </div>

                  <div className="flex gap-4" data-testid="contact-email">
                    <div className="h-11 w-11 bg-fw-red flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-fw-navy" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="fw-label text-white/50 text-[0.65rem] mb-2">EMAIL</p>
                      <a href="mailto:Info@freightwinglogistic.com" className="hover:text-fw-red transition-colors break-all">Info@freightwinglogistic.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4" data-testid="contact-website">
                    <div className="h-11 w-11 bg-fw-red flex items-center justify-center shrink-0">
                      <Globe size={18} className="text-fw-navy" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="fw-label text-white/50 text-[0.65rem] mb-2">WEBSITE</p>
                      <a href="https://www.freightwinglogistic.com" className="hover:text-fw-red transition-colors">www.freightwinglogistic.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4" data-testid="contact-office">
                    <div className="h-11 w-11 bg-fw-red flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-fw-navy" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="fw-label text-white/50 text-[0.65rem] mb-2">HEAD OFFICE</p>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Office No-1504, BLA Business Park,<br />
                        CTS No. 492, Sonawala Road,<br />
                        Goregaon East, Mumbai — 400063
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Branches */}
          <FadeIn delay={0.05}>
            <div className="mt-10" data-testid="branches-section">
              <div className="flex items-center gap-4 mb-8">
                <p className="fw-label text-fw-red">— Branch Offices</p>
                <div className="h-[2px] flex-1 bg-fw-red/30" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  {
                    city: "Ahmedabad",
                    lines: [
                      "FW Worldwide Pvt Ltd",
                      "Office No. 302, Aniket Complex,",
                      "Near Girish Cold Drink, CG Road,",
                      "Navrangpura, Ahmedabad — 380009",
                    ],
                  },
                  {
                    city: "Pune",
                    lines: [
                      "FW Worldwide Pvt Ltd",
                      "Shop No. 7, Osia Arcade, Purna Nagar",
                      "(Opp. Tata Motors car plant gate),",
                      "Chinchwad, Pune — 411019",
                    ],
                  },
                  {
                    city: "Kolkata",
                    lines: [
                      "M.A Business Centre",
                      "113 Park Street,",
                      "Kolkata — 700016,",
                      "West Bengal, India",
                    ],
                  },
                  {
                    city: "Bhiwandi",
                    lines: [
                      "FW Worldwide Pvt Ltd",
                      "B-40 Paresh Complex,",
                      "Kalher Village,",
                      "Bhiwandi — 421302",
                    ],
                  },
                ].map((b, i) => (
                  <div
                    key={b.city}
                    className="bg-white border border-fw-navy/10 p-6 md:p-7 hover:border-fw-red transition-colors group"
                    data-testid={`branch-${b.city.toLowerCase()}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-9 w-9 bg-fw-navy flex items-center justify-center group-hover:bg-fw-red transition-colors">
                        <MapPin size={15} className="text-fw-red group-hover:text-fw-navy transition-colors" strokeWidth={2.5} />
                      </div>
                      <h3 className="fw-heading text-2xl text-fw-navy tracking-wide">{b.city}</h3>
                    </div>
                    <p className="text-sm text-fw-navy/75 leading-relaxed">
                      {b.lines.map((ln, idx) => (
                        <span key={idx}>
                          {ln}
                          {idx < b.lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Map */}
          <FadeIn delay={0.1}>
            <div className="mt-10 aspect-[21/9] md:aspect-[21/7] w-full bg-fw-navy overflow-hidden border border-fw-navy/10" data-testid="contact-map">
              <iframe
                title="FW Worldwide Office Map"
                src="https://www.google.com/maps?q=BLA+Business+Park+Sonawala+Road+Goregaon+East+Mumbai&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
