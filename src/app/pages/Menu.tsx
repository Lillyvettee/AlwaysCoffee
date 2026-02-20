import { Coffee, Sparkles, Flame, Snowflake } from "lucide-react";
import { motion } from "motion/react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

export function Menu() {
  const menuCategories: MenuCategory[] = [
    {
      title: "Hot Coffee",
      icon: <Flame className="text-[#c84a4a]" size={28} />,
      items: [
        { name: "House Drip Coffee", description: "Our signature blend", price: "$3.50" },
        { name: "Americano", description: "Espresso with hot water", price: "$4.00" },
        { name: "Latte", description: "Espresso with steamed milk", price: "$5.00" },
        { name: "Cappuccino", description: "Espresso with foamed milk", price: "$5.00" },
        { name: "Mocha", description: "Chocolate and espresso delight", price: "$5.50" },
        { name: "Caramel Macchiato", description: "Vanilla and caramel perfection", price: "$5.50" },
      ],
    },
    {
      title: "Iced Coffee",
      icon: <Snowflake className="text-[#c84a4a]" size={28} />,
      items: [
        { name: "Iced Coffee", description: "Smooth and refreshing", price: "$4.00" },
        { name: "Iced Latte", description: "Espresso over ice with milk", price: "$5.50" },
        { name: "Iced Mocha", description: "Chocolate coffee over ice", price: "$6.00" },
        { name: "Cold Brew", description: "Slow-steeped perfection", price: "$5.00" },
        { name: "Iced Caramel Macchiato", description: "Sweet and creamy", price: "$6.00" },
      ],
    },
    {
      title: "Specialty Drinks",
      icon: <Sparkles className="text-[#c84a4a]" size={28} />,
      items: [
        { name: "Vanilla Sweet Cream Cold Brew", description: "Our signature cold brew", price: "$6.50" },
        { name: "Honey Lavender Latte", description: "Floral and sweet", price: "$6.00" },
        { name: "Rose Cardamom Latte", description: "Aromatic and unique", price: "$6.00" },
        { name: "Mexican Hot Chocolate", description: "Spiced chocolate goodness", price: "$5.50" },
        { name: "Matcha Latte", description: "Green tea perfection", price: "$5.50" },
      ],
    },
    {
      title: "More Drinks",
      icon: <Coffee className="text-[#c84a4a]" size={28} />,
      items: [
        { name: "Hot Chocolate", description: "Rich and creamy", price: "$4.50" },
        { name: "Chai Latte", description: "Spiced tea with milk", price: "$5.00" },
        { name: "Tea", description: "Hot or iced", price: "$3.50" },
        { name: "Fresh Juice", description: "Orange or grapefruit", price: "$4.00" },
        { name: "Smoothies", description: "Fruit blended perfection", price: "$6.00" },
      ],
    },
  ];

  return (
    <div className="py-12 min-h-screen bg-gradient-to-br from-white via-[#fff5f5] to-[#ffe5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl mb-4 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>Our Menu</h1>
          <p className="text-xl text-[#8b4545]">
            Handcrafted beverages made with love, just for you ☕💕
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {menuCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl shadow-lg border-2 border-[#f5d7d7] p-8 hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#f5d7d7]">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h2 className="text-3xl text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    className="flex justify-between items-start gap-4 p-3 rounded-2xl hover:bg-[#fff5f5] transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-1">
                      <h3 className="text-[#8b4545] mb-1">{item.name}</h3>
                      <p className="text-sm text-[#a87676]">{item.description}</p>
                    </div>
                    <span className="text-[#c84a4a] whitespace-nowrap font-bold">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          className="mt-12 text-center bg-gradient-to-r from-[#ffe5e5] via-[#f5d7d7] to-[#ffd1d1] p-8 rounded-3xl border-2 border-white shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#8b4545] text-lg">
            All drinks can be customized with your choice of milk and sweetness level. ✨
            <br />
            Add an extra shot of espresso for $1.00 ☕
          </p>
        </motion.div>
      </div>
    </div>
  );
}