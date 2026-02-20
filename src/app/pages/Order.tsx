import { Coffee, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";

export function Order() {
  const categories = [
    {
      name: "Hot Drinks",
      items: [
        { name: "Classic Latte", price: "$4.50", description: "Smooth espresso with steamed milk" },
        { name: "Cappuccino", price: "$4.50", description: "Bold espresso with frothy milk" },
        { name: "Caramel Macchiato", price: "$5.00", description: "Sweet caramel with vanilla and espresso" },
        { name: "Mocha", price: "$5.00", description: "Rich chocolate and espresso" },
        { name: "Americano", price: "$3.50", description: "Classic espresso and hot water" },
      ]
    },
    {
      name: "Iced Drinks",
      items: [
        { name: "Iced Latte", price: "$4.75", description: "Chilled espresso and cold milk over ice" },
        { name: "Iced Vanilla Latte", price: "$5.25", description: "Sweet vanilla with iced espresso" },
        { name: "Cold Brew", price: "$4.50", description: "Smooth, slow-steeped coffee" },
        { name: "Iced Caramel Macchiato", price: "$5.25", description: "Iced perfection with caramel drizzle" },
      ]
    },
    {
      name: "Specialty Drinks",
      items: [
        { name: "Blessing Brew", price: "$5.50", description: "Our signature faith-inspired blend with honey and cinnamon" },
        { name: "Grace Latte", price: "$5.75", description: "Lavender vanilla latte topped with whipped cream" },
        { name: "Psalm 23 Pour", price: "$5.50", description: "Calming chamomile tea latte with local honey" },
      ]
    },
    {
      name: "Baked Goods",
      items: [
        { name: "Cinnamon Roll", price: "$3.50", description: "Fresh-baked and topped with cream cheese frosting" },
        { name: "Blueberry Muffin", price: "$3.00", description: "Made with local blueberries" },
        { name: "Chocolate Croissant", price: "$3.75", description: "Buttery pastry with rich chocolate" },
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
          <div className="flex justify-center mb-4">
            <Coffee className="text-[#c84a4a]" size={60} />
          </div>
          <h1 className="text-5xl mb-4 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>
            Order Now
          </h1>
          <p className="text-xl text-[#8b4545] max-w-2xl mx-auto mb-6">
            Call ahead or visit us in person to place your order
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="tel:210-999-51221"
              className="inline-block bg-[#c84a4a] text-white px-8 py-4 rounded-full hover:bg-[#a83d3d] transition-all hover:scale-105 shadow-lg"
            >
              📞 Call to Order: 210-999-51221
            </a>
            <p className="text-[#8b4545]">or visit us at 647 Cupples Rd, San Antonio, TX</p>
          </div>
        </motion.div>

        {/* Order Categories */}
        <div className="space-y-12">
          {categories.map((category, idx) => (
            <motion.section
              key={category.name}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#f5d7d7] shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h2 className="text-3xl mb-6 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white p-6 rounded-2xl border-2 border-[#ffe5e5] hover:border-[#c84a4a] transition-all hover:shadow-lg hover:scale-105"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl text-[#8b4545] font-semibold">{item.name}</h3>
                      <span className="text-lg text-[#c84a4a] font-bold">{item.price}</span>
                    </div>
                    <p className="text-[#8b4545] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Order Info */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-[#ffe5e5] to-[#ffd1d1] rounded-3xl p-8 text-center border-2 border-[#c84a4a] shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ShoppingCart className="inline-block text-[#c84a4a] mb-4" size={48} />
          <h3 className="text-3xl mb-4 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>
            How to Order
          </h3>
          <div className="max-w-3xl mx-auto space-y-3 text-[#8b4545] text-lg">
            <p>☎️ <strong>Call ahead:</strong> 210-999-51221</p>
            <p>🏠 <strong>Visit us:</strong> 647 Cupples Rd, San Antonio, TX 78237</p>
            <p>⏰ <strong>Hours:</strong> Mon-Thu 8am-3pm, Fri 8am-2pm, Sat 9am-3pm, Sun Closed</p>
            <p className="italic pt-4">"Taste and see that the Lord is good" - Psalm 34:8</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
