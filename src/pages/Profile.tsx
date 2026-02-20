import { useState } from "react";
import { motion } from "framer-motion";
import { Grid3X3, Film, Bookmark, Settings } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import { currentUser, posts, formatCount } from "@/data/mockData";

const tabs = [
  { icon: Grid3X3, label: "Posts" },
  { icon: Film, label: "Reels" },
  { icon: Bookmark, label: "Saved" },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 pt-6">
        {/* Profile Header */}
        <div className="flex items-start gap-6 md:gap-10 mb-8">
          <div className="story-ring flex-shrink-0">
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-3 border-background">
              <img src={currentUser.avatar} alt={currentUser.username} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <h1 className="text-xl font-display font-semibold text-foreground">{currentUser.username}</h1>
              <button className="px-5 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-semibold hover:bg-secondary/80 transition-colors">
                Edit profile
              </button>
              <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
                <Settings size={20} />
              </button>
            </div>

            <div className="flex gap-8 mb-4">
              {[
                { value: currentUser.posts, label: "posts" },
                { value: currentUser.followers, label: "followers" },
                { value: currentUser.following, label: "following" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center md:text-left">
                  <span className="font-semibold text-foreground">{formatCount(value)}</span>
                  <span className="text-sm text-muted-foreground ml-1">{label}</span>
                </div>
              ))}
            </div>

            <div className="hidden md:block">
              <p className="text-sm font-semibold text-foreground">{currentUser.displayName}</p>
              <p className="text-sm text-secondary-foreground">{currentUser.bio}</p>
            </div>
          </div>
        </div>

        {/* Mobile bio */}
        <div className="md:hidden mb-4">
          <p className="text-sm font-semibold text-foreground">{currentUser.displayName}</p>
          <p className="text-sm text-secondary-foreground">{currentUser.bio}</p>
        </div>

        {/* Tabs */}
        <div className="flex border-t border-border">
          {tabs.map(({ icon: Icon, label }, i) => (
            <button
              key={label}
              onClick={() => setActiveTab(i)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
                activeTab === i ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              <Icon size={14} />
              <span className="hidden sm:inline">{label}</span>
              {activeTab === i && (
                <motion.div layoutId="profile-tab" className="absolute top-0 left-0 right-0 h-px bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-1 mt-1 pb-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="aspect-square cursor-pointer overflow-hidden rounded-sm"
            >
              <img src={post.image} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
