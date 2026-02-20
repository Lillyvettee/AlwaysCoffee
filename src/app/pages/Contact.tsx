import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";

export function Contact() {
  const hours = [
    { day: "Monday - Thursday", time: "8:00 AM - 3:00 PM" },
    { day: "Friday", time: "8:00 AM - 2:00 PM" },
    { day: "Saturday", time: "9:00 AM - 3:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>Visit Us</h1>
          <p className="text-xl text-[#8b4545]">
            We'd love to see you at Always Coffee House!
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Location Card */}
          <div className="bg-white rounded-lg shadow-md border-2 border-[#f5d7d7] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#f5d7d7] rounded-full">
                <MapPin className="text-[#c84a4a]" size={28} />
              </div>
              <h2 className="text-3xl text-[#c84a4a]">Location</h2>
            </div>
            <p className="text-xl text-[#8b4545] mb-6">
              647 Cupples Rd<br />
              San Antonio, TX 78237
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=647+Cupples+Rd+San+Antonio+TX+78237"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c84a4a] text-white px-6 py-3 rounded-full hover:bg-[#a83d3d] transition-colors"
            >
              <Navigation size={20} />
              Get Directions
            </a>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-md border-2 border-[#f5d7d7] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#f5d7d7] rounded-full">
                <Phone className="text-[#c84a4a]" size={28} />
              </div>
              <h2 className="text-3xl text-[#c84a4a]">Contact</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#a87676] mb-1">Phone</p>
                <a
                  href="tel:21099951221"
                  className="text-xl text-[#8b4545] hover:text-[#c84a4a] transition-colors"
                >
                  (210) 999-51221
                </a>
              </div>
              <div>
                <p className="text-sm text-[#a87676] mb-1">Email</p>
                <a
                  href="mailto:hello@alwayscoffee.com"
                  className="text-xl text-[#8b4545] hover:text-[#c84a4a] transition-colors"
                >
                  hello@alwayscoffee.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hours Section */}
        <div className="bg-[#f5d7d7] rounded-lg p-12 mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-white rounded-full">
              <Clock className="text-[#c84a4a]" size={32} />
            </div>
            <h2 className="text-4xl text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>Hours of Operation</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {hours.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 flex justify-between items-center"
              >
                <span className="text-xl text-[#8b4545]">{item.day}</span>
                <span className="text-xl text-[#c84a4a]">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-lg shadow-md border-2 border-[#f5d7d7] overflow-hidden">
          <div className="aspect-[16/9] bg-[#f5d7d7] flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="text-[#c84a4a] mx-auto mb-4" size={48} />
              <p className="text-xl text-[#8b4545] mb-4">
                Find us at 647 Cupples Rd, San Antonio
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=647+Cupples+Rd+San+Antonio+TX+78237"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#c84a4a] hover:text-[#a83d3d] transition-colors underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-[#8b4545] text-lg">
            Have questions? Give us a call or stop by—we're always happy to chat!
          </p>
        </div>
      </div>
    </div>
  );
}