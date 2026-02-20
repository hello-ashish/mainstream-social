import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, Music } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import { users, formatCount } from "@/data/mockData";
import post1 from "@/assets/post-1.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";

const reels = [
  { id: "r1", user: users[0], image: post1, likes: 12400, comments: 890, caption: "Night vibes 🌃", song: "Blinding Lights - The Weeknd" },
  { id: "r2", user: users[2], image: post3, likes: 8900, comments: 456, caption: "Mountain therapy 🏔️", song: "On Top of the World - Imagine Dragons" },
  { id: "r3", user: users[3], image: post4, likes: 23000, comments: 1200, caption: "Island life 🏝️", song: "Levitating - Dua Lipa" },
];

const Reels = () => {
  return (
    <AppLayout>
      <div className="max-w-md mx-auto h-[calc(100vh-56px)] md:h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide">
        {reels.map((reel, i) => (
          <div key={reel.id} className="snap-start h-[calc(100vh-56px)] md:h-screen relative">
            <img src={reel.image} alt="" className="w-full h-full object-cover" />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/20" />

            {/* Right actions */}
            <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5">
              {[
                { icon: Heart, count: formatCount(reel.likes) },
                { icon: MessageCircle, count: formatCount(reel.comments) },
                { icon: Send, count: "Share" },
                { icon: Bookmark, count: "" },
              ].map(({ icon: Icon, count }, j) => (
                <motion.button
                  key={j}
                  whileTap={{ scale: 1.3 }}
                  className="flex flex-col items-center gap-1"
                >
                  <Icon size={28} className="text-foreground drop-shadow-lg" />
                  {count && <span className="text-xs text-foreground font-medium drop-shadow">{count}</span>}
                </motion.button>
              ))}
            </div>

            {/* Bottom info */}
            <div className="absolute left-3 right-16 bottom-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-foreground/30">
                  <img src={reel.user.avatar} alt="" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-semibold text-foreground drop-shadow">{reel.user.username}</span>
                <button className="text-xs font-semibold text-primary border border-primary/50 rounded-md px-2 py-0.5">
                  Follow
                </button>
              </div>
              <p className="text-sm text-foreground drop-shadow mb-2">{reel.caption}</p>
              <div className="flex items-center gap-2 text-xs text-foreground/80">
                <Music size={12} />
                <span className="truncate">{reel.song}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
};

export default Reels;
