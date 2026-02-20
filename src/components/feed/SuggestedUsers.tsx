import { motion } from "framer-motion";
import { suggestedUsers, formatCount } from "@/data/mockData";

const SuggestedUsers = () => {
  return (
    <div className="glass-panel p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-muted-foreground">Suggested for you</span>
        <button className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
          See All
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {suggestedUsers.map((user, i) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold text-foreground truncate">{user.username}</span>
                {user.verified && (
                  <div className="w-3 h-3 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-[7px] text-primary-foreground font-bold">✓</span>
                  </div>
                )}
              </div>
              <span className="text-xs text-muted-foreground">{formatCount(user.followers)} followers</span>
            </div>
            <button className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20">
              Follow
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsers;
