import { motion } from "framer-motion";
import { Edit, Search } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import { users, currentUser } from "@/data/mockData";

const conversations = users.slice(0, 5).map((user, i) => ({
  user,
  lastMessage: ["Hey! How's it going? 💬", "Check out this photo 📸", "Are you free tomorrow?", "Loved your latest post! 🔥", "Let's collaborate!"][i],
  time: ["2m", "15m", "1h", "3h", "1d"][i],
  unread: i < 2,
}));

const Messages = () => {
  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto h-[calc(100vh-56px)] md:h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h1 className="font-display font-semibold text-lg text-foreground">{currentUser.username}</h1>
          <button className="text-foreground hover:text-primary transition-colors">
            <Edit size={22} />
          </button>
        </div>

        {/* Search */}
        <div className="p-3">
          <div className="glass-panel flex items-center gap-2 px-3 py-2">
            <Search size={16} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search messages..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map(({ user, lastMessage, time, unread }, i) => (
            <motion.button
              key={user.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="w-full flex items-center gap-3 p-3 hover:bg-secondary/50 transition-colors text-left"
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
                </div>
                {unread && (
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className={`text-sm ${unread ? "font-semibold text-foreground" : "text-secondary-foreground"}`}>
                    {user.username}
                  </span>
                  {user.verified && (
                    <div className="w-3 h-3 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-[7px] text-primary-foreground font-bold">✓</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <span className={`text-xs truncate ${unread ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                    {lastMessage}
                  </span>
                  <span className="text-xs text-muted-foreground flex-shrink-0">· {time}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Messages;
