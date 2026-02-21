import { ShoppingBag, Heart } from "lucide-react";
import { motion } from "motion/react";



function LogoImage({ className }: { className?: string }) {
  return (
    <img src="/assets/logo.png" className={className} alt="Always Coffee Logo" />
  );
}

export function Merch() {
  const merchandise = [
    {
      category: "T-Shirts",
      items: [
        {
          name: "Always Coffee Classic Tee",
          price: "$24.99",
          description: "Soft cotton tee with our signature logo in pink and red",
          colors: ["White", "Pink", "Cream"],
          sizes: ["S", "M", "L", "XL", "2XL"]
        },
        {
          name: "Faith & Coffee Tee",
          price: "$26.99",
          description: "Inspirational design with 'Fueled by Faith & Coffee'",
          colors: ["White", "Gray", "Pink"],
          sizes: ["S", "M", "L", "XL", "2XL"]
        },
        {
          name: "Vintage Trailer Tee",
          price: "$24.99",
          description: "Features our iconic pink trailer graphic",
          colors: ["White", "Pink", "Red"],
          sizes: ["S", "M", "L", "XL", "2XL"]
        },
      ]
    },
    {
      category: "Stickers",
      items: [
        {
          name: "Logo Sticker Pack",
          price: "$6.99",
          description: "Set of 5 waterproof vinyl stickers with our logo and designs",
          colors: ["Multi-color"],
          sizes: ["3-4 inches"]
        },
        {
          name: "Bow Logo Sticker",
          price: "$3.99",
          description: "Our signature bow design, perfect for laptops and water bottles",
          colors: ["Pink & Red"],
          sizes: ["3 inches"]
        },
        {
          name: "Coffee Cup Sticker",
          price: "$3.99",
          description: "Cute illustrated coffee cup with Always Coffee branding",
          colors: ["Pink & Red"],
          sizes: ["3 inches"]
        },
        {
          name: "Faith Quote Sticker",
          price: "$4.99",
          description: "Inspirational Bible verse sticker",
          colors: ["Multi-color"],
          sizes: ["4 inches"]
        },
      ]
    },
    {
      category: "Accessories",
      items: [
        {
          name: "Always Coffee Tumbler",
          price: "$19.99",
          description: "16oz insulated stainless steel tumbler with logo",
          colors: ["Pink", "Red", "White"],
          sizes: ["16oz"]
        },
        {
          name: "Tote Bag",
          price: "$16.99",
          description: "Canvas tote with our vintage aesthetic design",
          colors: ["Natural", "Pink"],
          sizes: ["Standard"]
        },
        {
          name: "Baseball Cap",
          price: "$22.99",
          description: "Embroidered Always Coffee logo on adjustable cap",
          colors: ["Pink", "White", "Red"],
          sizes: ["Adjustable"]
        },
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <BowImage className="h-16 w-auto" />
            <ShoppingBag className="text-[#c84a4a]" size={60} />
          </div>
          <h1 className="text-5xl mb-4 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>
            Always Coffee Merch
          </h1>
          <p className="text-xl text-[#8b4545] max-w-2xl mx-auto mb-6">
            Show your love for Always Coffee with our exclusive merchandise!
          </p>
          <p className="text-lg text-[#8b4545] italic">
            All proceeds support our mission to serve the community with faith and love ❤️
          </p>
        </motion.div>

        {/* Merchandise Categories */}
        <div className="space-y-12">
          {merchandise.map((category, idx) => (
            <motion.section
              key={category.category}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#f5d7d7] shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h2 className="text-3xl mb-6 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white p-6 rounded-2xl border-2 border-[#ffe5e5] hover:border-[#c84a4a] transition-all hover:shadow-lg hover:scale-105"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl text-[#8b4545] font-semibold flex-1">{item.name}</h3>
                      <span className="text-lg text-[#c84a4a] font-bold ml-2">{item.price}</span>
                    </div>
                    <p className="text-[#8b4545] text-sm mb-3">{item.description}</p>
                    <div className="space-y-2 text-sm text-[#8b4545]">
                      <div>
                        <span className="font-semibold">Colors:</span> {item.colors.join(", ")}
                      </div>
                      <div>
                        <span className="font-semibold">Sizes:</span> {item.sizes.join(", ")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Purchase Info */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-[#ffe5e5] to-[#ffd1d1] rounded-3xl p-8 text-center border-2 border-[#c84a4a] shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Heart className="inline-block text-[#c84a4a] mb-4" size={48} />
          <h3 className="text-3xl mb-4 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>
            How to Purchase
          </h3>
          <div className="max-w-3xl mx-auto space-y-3 text-[#8b4545] text-lg">
            <p>🏠 <strong>In-Store:</strong> Visit us at 647 Cupples Rd to browse and purchase</p>
            <p>☎️ <strong>Phone Orders:</strong> Call 210-999-51221 to check availability</p>
            <p>💳 <strong>Payment:</strong> We accept cash, credit, and debit cards</p>
            <p className="text-base pt-4 italic">
              *All items are currently available for purchase in-store only. Limited quantities available.*
            </p>
          </div>
        </motion.div>

        {/* Logo Display */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <LogoImage className="h-32 w-auto mx-auto opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}
