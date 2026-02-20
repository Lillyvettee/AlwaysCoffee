import { MapPin, Phone, Clock } from "lucide-react";
import bowImg from "figma:asset/85c2f5bc9a39cd77c53ba594941f7967ec94ab0d.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#ffe5e5] via-[#f5d7d7] to-[#ffd1d1] border-t-4 border-[#c84a4a] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="text-[#c84a4a]" size={20} />
              <h3 className="text-[#8b4545]">Location</h3>
            </div>
            <p className="text-[#8b4545] text-center md:text-left">
              647 Cupples Rd<br />
              San Antonio, TX 78237
            </p>
          </div>

          {/* Logo Center */}
          <div className="flex justify-center items-center">
            <img src={bowImg} alt="Always Coffee" className="h-20 w-auto hover:scale-110 transition-transform" />
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-2 mb-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Phone className="text-[#c84a4a]" size={20} />
              <h3 className="text-[#8b4545]">Contact</h3>
            </div>
            <p className="text-[#8b4545] text-center md:text-right">
              (210) 999-51221
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-[#c84a4a]/30 text-center text-[#8b4545]">
          <p>Made with 💕 &copy; 2026 Always Coffee House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}