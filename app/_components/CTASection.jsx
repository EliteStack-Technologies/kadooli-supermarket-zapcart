"use client";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <div className="w-full bg-[#e22807] rounded-xl overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 py-3 sm:px-6 sm:py-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-white">
          {/* Contact Info */}
          <div className="space-y-1">
            <h3 className="text-base font-semibold mb-1">Contact Us</h3>
            <div className="flex flex-col gap-1.5 text-xs sm:text-sm">
              <a
                href="tel:+971582987028"
                className="flex items-center gap-2 transition-colors"
              >
                <Phone size={16} />
                <span>+971 582987028</span>
              </a>
              <a
                href="tel:042885292"
                className="flex items-center gap-2 transition-colors"
              >
                <Phone size={16} />
                <span>042885292</span>
              </a>
              <a
                href="mailto:hello@kadoolisupermarket.com"
                className="flex items-center gap-2 transition-colors"
              >
                <Mail size={16} />
                <span>hello@kadoolisupermarket.com</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-1">
            <h3 className="text-base font-semibold mb-1">Location</h3>
            <div className="flex items-start gap-2 text-xs sm:text-sm">
              <span>Near Fire Station Rashidiya- Dubai -UAE</span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/20">
          <div className="flex gap-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center transition-colors"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center transition-colors"
            >
              <Instagram size={14} />
            </a>
          </div>
          <a
            href="https://zapelite.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-xs text-white/80">
              powered by Zapelite
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
