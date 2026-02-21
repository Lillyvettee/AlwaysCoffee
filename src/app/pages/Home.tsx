
function HouseImage({ className }: { className?: string }) {
  return (
    <img src="/assets/shop.png" className={className} alt="Always Coffee House" />
  );
}

function TrailerImage({ className }: { className?: string }) {
  return (
    <img src="/assets/cart.png" className={className} alt="Always Coffee Trailer" />
  );
}

function LogoImage({ className }: { className?: string }) {
  return (
    <img src="/assets/logo.png" className={className} alt="Always Coffee Logo" />
  );
}
import { Link } from "react-router";
import { Coffee, Heart, MapPin } from "lucide-react";
import { motion } from "motion/react";

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
