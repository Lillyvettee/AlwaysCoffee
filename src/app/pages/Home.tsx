import { Link } from "react-router";
import { Coffee, Heart, MapPin } from "lucide-react";
import { motion } from "motion/react";

function HouseImage({ className }: { className?: string }) {
  return (
    <img src="/assets/shop.png" className={className} alt="Always Coffee House" /> )
    <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" rx="16" fill="#ffe5e5"/>
      <rect x="60" y="145" width="280" height="135" rx="4" fill="#f5d7d7" stroke="#c84a4a" strokeWidth="2.5"/>
      <polygon points="45,148 200,55 355,148" fill="#c84a4a"/>
      <rect x="155" y="185" width="90" height="95" rx="4" fill="#c84a4a" opacity="0.25"/>
      <rect x="168" y="200" width="28" height="28" rx="3" fill="white" stroke="#c84a4a" strokeWidth="1.5"/>
      <rect x="204" y="200" width="28" height="28" rx="3" fill="white" stroke="#c84a4a" strokeWidth="1.5"/>
      <circle cx="199" cy="252" r="3.5" fill="#c84a4a"/>
      <rect x="75" y="170" width="55" height="42" rx="3" fill="white" stroke="#c84a4a" strokeWidth="1.5"/>
      <rect x="83" y="178" width="39" height="26" rx="2" fill="#ffe5e5"/>
      <rect x="270" y="170" width="55" height="42" rx="3" fill="white" stroke="#c84a4a" strokeWidth="1.5"/>
      <rect x="278" y="178" width="39" height="26" rx="2" fill="#ffe5e5"/>
      <text x="200" y="100" textAnchor="middle" fill="white" fontSize="13" fontFamily="serif" fontStyle="italic">Always Coffee</text>
    </svg>
  );
}

function TrailerImage({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="260" rx="16" fill="#fff0f0"/>
      <rect x="20" y="75" width="360" height="140" rx="12" fill="#f5d7d7" stroke="#c84a4a" strokeWidth="3"/>
      <rect x="20" y="75" width="360" height="42" rx="12" fill="#c84a4a"/>
      <text x="200" y="103" textAnchor="middle" fill="white" fontSize="17" fontFamily="serif" fontStyle="italic">Always Coffee House</text>
      <rect x="50" y="137" width="68" height="58" rx="6" fill="white" stroke="#c84a4a" strokeWidth="2"/>
      <rect x="59" y="146" width="50" height="34" rx="3" fill="#ffe5e5"/>
      <rect x="162" y="132" width="76" height="63" rx="6" fill="white" stroke="#c84a4a" strokeWidth="2"/>
      <rect x="171" y="141" width="58" height="38" rx="3" fill="#ffe5e5"/>
      <rect x="282" y="137" width="68" height="58" rx="6" fill="white" stroke="#c84a4a" strokeWidth="2"/>
      <circle cx="78" cy="220" r="20" fill="#8b4545" stroke="#c84a4a" strokeWidth="2"/>
      <circle cx="78" cy="220" r="9" fill="#c84a4a"/>
      <circle cx="312" cy="220" r="20" fill="#8b4545" stroke="#c84a4a" strokeWidth="2"/>
      <circle cx="312" cy="220" r="9" fill="#c84a4a"/>
    </svg>
  );
}

function LogoImage({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="78" fill="#ffe5e5" stroke="#c84a4a" strokeWidth="3"/>
      <path d="M80 80 C80 80 40 50 25 60 C15 68 30 90 80 80Z" fill="#c84a4a" opacity="0.9"/>
      <path d="M80 80 C80 80 120 50 135 60 C145 68 130 90 80 80Z" fill="#c84a4a" opacity="0.9"/>
      <path d="M80 80 C80 80 40 110 25 100 C15 92 30 70 80 80Z" fill="#a83d3d" opacity="0.9"/>
      <path d="M80 80 C80 80 120 110 135 100 C145 92 130 70 80 80Z" fill="#a83d3d" opacity="0.9"/>
      <circle cx="80" cy="80" r="12" fill="#e86060"/>
      <text x="80" y="130" textAnchor="middle" fill="#c84a4a" fontSize="11" fontFamily="serif" fontStyle="italic">Always Coffee</text>
    </svg>
  );
}

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#ffe5e5] via-[#f5d7d7] to-[#ffd1d1] py-20 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Coffee size={60} className="text-[#c84a4a]" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-10 opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Heart size={50} className="text-[#ff6b9d]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl mb-6 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>
                Welcome to Always Coffee House
              </h1>
              <p className="text-2xl text-[#8b4545] mb-4 italic">
                "I am with you, always" - Matthew 28:20
              </p>
              <Link
                to="/menu"
                className="inline-block bg-[#c84a4a] text-white px-8 py-4 rounded-full hover:bg-[#a83d3d] transition-all hover:scale-105 shadow-lg"
              >
                View Our Menu ☕
              </Link>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full max-w-md"
              >
                <HouseImage className="w-full rounded-3xl shadow-2xl border-4 border-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-8 bg-white rounded-3xl shadow-lg border-2 border-[#f5d7d7] hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="inline-block p-4 bg-gradient-to-br from-[#ffe5e5] to-[#f5d7d7] rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Coffee className="text-[#c84a4a]" size={32} />
              </motion.div>
              <h3 className="text-xl mb-3 text-[#8b4545]">Premium Coffee</h3>
              <p className="text-[#8b4545]">
                Expertly crafted beverages made with the finest beans and lots of love.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-white rounded-3xl shadow-lg border-2 border-[#f5d7d7] hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="inline-block p-4 bg-gradient-to-br from-[#ffe5e5] to-[#f5d7d7] rounded-full mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Heart className="text-[#c84a4a]" size={32} />
              </motion.div>
              <h3 className="text-xl mb-3 text-[#8b4545]">Made with Love</h3>
              <p className="text-[#8b4545]">
                Every cup is prepared with care and attention to detail.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-white rounded-3xl shadow-lg border-2 border-[#f5d7d7] hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="inline-block p-4 bg-gradient-to-br from-[#ffe5e5] to-[#f5d7d7] rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className="text-[#c84a4a]" size={32} />
              </motion.div>
              <h3 className="text-xl mb-3 text-[#8b4545]">Local Favorite</h3>
              <p className="text-[#8b4545]">
                Proudly serving the San Antonio community with warmth and hospitality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trailer Showcase */}
      <section className="py-16 bg-gradient-to-br from-[#ffe5e5] via-[#f5d7d7] to-[#ffd1d1] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TrailerImage className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl mb-6 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>Where It All Began</h2>
              <p className="text-xl text-[#8b4545] mb-6">
                This charming vintage trailer was our very first shop, where the Always Coffee story started. It represents our humble beginnings and the passion that drove us to share great coffee with our community.
              </p>
              <div className="mt-8 bg-white/60 backdrop-blur-sm p-6 rounded-3xl border-2 border-white shadow-lg">
                <h3 className="text-2xl mb-4 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>Our Mission</h3>
                <p className="text-lg text-[#8b4545] leading-relaxed mb-4">
                  At Always Coffee House, our mission is to create a welcoming, faith-filled space where every customer feels like family. We're committed to serving exceptional, handcrafted coffee while building meaningful connections within our San Antonio community.
                </p>
                <p className="text-lg text-[#8b4545] leading-relaxed">
                  Rooted in Christian values, we believe in spreading love, joy, and kindness with every cup. From our first coffee trailer to today, we strive to be a light in the community—one coffee at a time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-6 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>Visit Us Today</h2>
            <p className="text-xl text-[#8b4545] mb-8">
              We're located at 647 Cupples Rd in San Antonio. Come experience the Always difference!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block bg-[#c84a4a] text-white px-8 py-4 rounded-full hover:bg-[#a83d3d] transition-all shadow-lg"
              >
                Get Directions 💕
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
