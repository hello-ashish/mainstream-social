import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { stories, type Story } from "@/data/mockData";

const StoryAvatar = ({ story, index }: { story: Story; index: number }) => {
  const isOwn = index === 0;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-1.5 min-w-[72px]"
    >
      <div className="relative">
        <div className={`w-16 h-16 rounded-full p-[2px] ${story.seen ? "bg-border" : ""}`}
          style={!story.seen ? { background: "var(--gradient-neon)" } : {}}
        >
          <div className="w-full h-full rounded-full border-2 border-background overflow-hidden">
            <img
              src={story.user.avatar}
              alt={story.user.username}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {isOwn && (
          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center border-2 border-background">
            <Plus size={12} className="text-primary-foreground" />
          </div>
        )}
      </div>
      <span className="text-xs text-muted-foreground truncate max-w-[64px]">
        {isOwn ? "Your story" : story.user.username}
      </span>
    </motion.button>
  );
};

const StoriesBar = () => {
  return (
    <div className="glass-panel p-4 mb-4 overflow-x-auto scrollbar-hide">
      <div className="flex gap-3">
        {stories.map((story, i) => (
          <StoryAvatar key={story.id} story={story} index={i} />
        ))}
      </div>
    </div>
  );
};

export default StoriesBar;
