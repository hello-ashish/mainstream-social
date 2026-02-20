import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";
import exploreHero from "@/assets/explore-hero.jpg";

const images = [post1, post2, post3, post4, exploreHero, post1, post2, post3, post4, exploreHero, post1, post2];

const categories = ["For You", "Travel", "Food", "Fashion", "Art", "Music", "Tech", "Nature"];

const Explore = () => {
  const [active, setActive] = useState("For You");

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 pt-4">
        {/* Search */}
        <div className="glass-panel flex items-center gap-3 px-4 py-3 mb-4">
          <Search size={18} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search MainStream..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-1">
          {images.map((img, i) => {
            const isLarge = i % 5 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.02 }}
                className={`relative cursor-pointer overflow-hidden rounded-sm ${
                  isLarge ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div className={`${isLarge ? "aspect-square" : "aspect-square"}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default Explore;
