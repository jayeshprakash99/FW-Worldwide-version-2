import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-fw-navy-deep text-white" data-testid="main-footer">
      <div className="fw-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Logo variant="light" withTagline />
            <p className="text-white/60 text-sm leading-relaxed mt-5 max-w-sm">
              FW Worldwide Pvt Ltd — integrated logistics and supply chain
              solutions delivered on time, every time.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 border border-white/20 flex items-center justify-center hover:bg-fw-red hover:border-fw-red transition-colors"
                  data-testid={`footer-social-${i}`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="fw-label text-fw-yellow mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/services" className="hover:text-white">Air Freight</Link></li>
              <li><Link to="/services" className="hover:text-white">Sea Freight</Link></li>
              <li><Link to="/services" className="hover:text-white">Custom Clearance</Link></li>
              <li><Link to="/services" className="hover:text-white">Door to Door</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="fw-label text-fw-yellow mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/carriers" className="hover:text-white">Carriers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/services" className="hover:text-white">Capabilities</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="fw-label text-fw-yellow mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin size={18} className="text-fw-red shrink-0 mt-0.5" />
                <span>Office No-1504, BLA Business Park, CTS No. 492, Sonawala Road, Goregaon East, Mumbai — 400063</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-fw-red shrink-0 mt-0.5" />
                <a href="tel:+912268464030" className="hover:text-white">+91 22-68464030 / 9619639221</a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-fw-red shrink-0 mt-0.5" />
                <a href="mailto:Info@freightwinglogistic.com" className="hover:text-white">Info@freightwinglogistic.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="fw-container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="fw-label text-[0.65rem] text-white/40">
            © {new Date().getFullYear()} FW Worldwide Pvt Ltd
          </p>
          <p className="fw-label text-[0.65rem] text-white/40">FORWARD. ALWAYS.</p>
        </div>
      </div>
    </footer>
  );
}
