import { Heart, Users, Coffee, Cross } from "lucide-react";

function BowImage({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 40 C60 40 20 10 5 20 C-5 28 10 50 60 40Z" fill="#c84a4a" opacity="0.85"/>
      <path d="M60 40 C60 40 100 10 115 20 C125 28 110 50 60 40Z" fill="#c84a4a" opacity="0.85"/>
      <path d="M60 40 C60 40 20 70 5 60 C-5 52 10 30 60 40Z" fill="#a83d3d" opacity="0.85"/>
      <path d="M60 40 C60 40 100 70 115 60 C125 52 110 30 60 40Z" fill="#a83d3d" opacity="0.85"/>
      <circle cx="60" cy="40" r="8" fill="#e86060"/>
    </svg>
  );
}

function TrailerImage({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="80" width="360" height="140" rx="12" fill="#f5d7d7" stroke="#c84a4a" strokeWidth="3"/>
      <rect x="20" y="80" width="360" height="40" rx="12" fill="#c84a4a"/>
      <text x="200" y="108" textAnchor="middle" fill="white" fontSize="18" fontFamily="serif" fontStyle="italic">Always Coffee House</text>
      <rect x="50" y="140" width="70" height="60" rx="6" fill="white" stroke="#c84a4a" strokeWidth="2"/>
      <rect x="60" y="150" width="50" height="35" rx="4" fill="#ffe5e5"/>
      <rect x="160" y="135" width="80" height="65" rx="6" fill="white" stroke="#c84a4a" strokeWidth="2"/>
      <rect x="170" y="145" width="60" height="40" rx="4" fill="#ffe5e5"/>
      <rect x="280" y="140" width="70" height="60" rx="6" fill="white" stroke="#c84a4a" strokeWidth="2"/>
      <circle cx="80" cy="225" r="22" fill="#8b4545" stroke="#c84a4a" strokeWidth="2"/>
      <circle cx="80" cy="225" r="10" fill="#c84a4a"/>
      <circle cx="310" cy="225" r="22" fill="#8b4545" stroke="#c84a4a" strokeWidth="2"/>
      <circle cx="310" cy="225" r="10" fill="#c84a4a"/>
      <rect x="0" y="215" width="400" height="6" rx="3" fill="#f5d7d7"/>
    </svg>
  );
}

function HouseImage({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="140" width="380" height="160" rx="4" fill="#f5d7d7" stroke="#c84a4a" strokeWidth="3"/>
      <polygon points="50,145 250,40 450,145" fill="#c84a4a"/>
      <rect x="190" y="195" width="120" height="105" rx="4" fill="#c84a4a" opacity="0.3"/>
      <rect x="210" y="215" width="35" height="35" rx="3" fill="white" stroke="#c84a4a" strokeWidth="1.5"/>
      <rect x="255" y="215" width="35" height="35" rx="3" fill="white" stroke="#c84a4a" strokeWidth="1.5"/>
      <circle cx="248" cy="270" r="4" fill="#c84a4a"/>
      <rect x="80" y="170" width="70" height="55" rx="3" fill="white" stroke="#c84a4a" strokeWidth="1.5"/>
      <rect x="90" y="180" width="50" height="35" rx="2" fill="#ffe5e5"/>
      <rect x="350" y="170" width="70" height="55" rx="3" fill="white" stroke="#c84a4a" strokeWidth="1.5"/>
      <rect x="360" y="180" width="50" height="35" rx="2" fill="#ffe5e5"/>
      <text x="250" y="92" textAnchor="middle" fill="white" fontSize="13" fontFamily="serif" fontStyle="italic">Always</text>
      <rect x="55" y="295" width="390" height="8" rx="4" fill="#c84a4a" opacity="0.3"/>
    </svg>
  );
}

export function About() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <BowImage className="h-24 w-auto mx-auto mb-6" />
          <h1 className="text-5xl mb-4 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>About Always Coffee House</h1>
          <p className="text-xl text-[#8b4545] max-w-3xl mx-auto">
            A Christian-based coffee shop where every cup tells a story and every visit feels like home
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>Our Story</h2>
              <div className="space-y-4 text-[#8b4545]">
                <p>
                  Always Coffee House was born from a simple passion: creating a welcoming, faith-filled space where
                  San Antonio locals can enjoy exceptional coffee in a charming, vintage-inspired setting.
                </p>
                <p>
                  Our iconic pink and red vintage trailer has become a beloved landmark on Cupples Road,
                  serving handcrafted beverages that warm hearts and brighten days. As a Christian-based coffee shop,
                  we strive to reflect God's love in everything we do.
                </p>
                <p>
                  We believe that great coffee is more than just a beverage—it's an experience, a moment
                  of joy, and a connection to community. That's why we pour love and faith into every cup we serve,
                  creating a space where everyone is welcome and valued.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <TrailerImage className="rounded-lg shadow-xl w-full" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16 bg-[#f5d7d7] rounded-lg p-12">
          <h2 className="text-4xl mb-12 text-center text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-full mb-4">
                <Cross className="text-[#c84a4a]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-[#8b4545]">Faith</h3>
              <p className="text-[#8b4545]">Rooted in Christian values and love</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-full mb-4">
                <Heart className="text-[#c84a4a]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-[#8b4545]">Made with Love</h3>
              <p className="text-[#8b4545]">Every drink is crafted with care and passion</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-full mb-4">
                <Users className="text-[#c84a4a]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-[#8b4545]">Community</h3>
              <p className="text-[#8b4545]">Building connections one coffee at a time</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-full mb-4">
                <Coffee className="text-[#c84a4a]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-[#8b4545]">Excellence</h3>
              <p className="text-[#8b4545]">Premium quality in every cup</p>
            </div>
          </div>
        </section>

        {/* Illustration Section */}
        <section className="mb-16">
          <div className="text-center">
            <h2 className="text-4xl mb-8 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>Our Home</h2>
            <div className="flex justify-center">
              <HouseImage className="w-full max-w-2xl rounded-lg shadow-xl" />
            </div>
            <p className="mt-8 text-xl text-[#8b4545] max-w-2xl mx-auto">
              Our charming coffee house is more than a place to grab your daily brew—it's
              a gathering spot for friends, neighbors, and coffee lovers from all walks of life.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white rounded-lg shadow-md border-2 border-[#f5d7d7] p-12">
          <h2 className="text-4xl mb-4 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>Join the Always Family</h2>
          <p className="text-xl text-[#8b4545] mb-8">We can't wait to serve you your next favorite drink!</p>
          <a
            href="/contact"
            className="inline-block bg-[#c84a4a] text-white px-8 py-3 rounded-full hover:bg-[#a83d3d] transition-colors"
          >
            Visit Us Today
          </a>
        </section>
      </div>
    </div>
  );
}
