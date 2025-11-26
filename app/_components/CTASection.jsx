"use client";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <div className="w-full  bg-[#e22807]  rounded-xl overflow-hidden">
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 text-white">
          {/* Contact Info */}
          <div className="space-y-2 ">
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <div className=" flex flex-col justify-start gap-3  text-sm">
              <a
                href="tel:+971582987028"
                className="flex items-center gap-2 hover:text-[#FF8D28] transition-colors"
              >
                <Phone size={18} />
                <span> +971 582987028</span>
              </a>
              <a
                href="tel:042885292"
                className="flex items-center gap-2 hover:text-[#FF8D28] transition-colors"
              >
                <Phone size={18} />
                <span> 042885292</span>
              </a>
              <a
                href="mailto:hello@kadoolisupermarket.com"
                className="flex items-center gap-2 hover:text-[#FF8D28] transition-colors"
              >
                <Mail size={18} />
                <span>hello@kadoolisupermarket.com</span>
              </a>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="space-y-2 w-[80%]">
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <div className="flex items-start gap-2 text-sm leading-snug ">
                {/* <MapPin size={18} /> */}
                <span>Near Fire Station Rashidiya- Dubai -UAE</span>
                {/* <span>123 Business Bay<br />Dubai, United Arab Emirates</span> */}
              </div>
            </div>
            {/* Social Links */}
          </div>
          {/* Location */}
        </div>

        {/* Footer Note */}
        <div className="flex justify-between items-center mt-2  border-t border-white/20">
          <div className="mt-2 ">
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/pg/millenniumhypermarketpalluruthy/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF8D28] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF8D28] transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
          <a
            href="https://zapelite.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="  text-center text-xs text-white/80">
              powered by Zapelite
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
