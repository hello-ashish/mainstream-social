import { motion } from "framer-motion";
import { Heart, MessageCircle, UserPlus, AtSign } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import { users } from "@/data/mockData";

const notifications = [
  { id: "n1", user: users[0], type: "like" as const, text: "liked your post.", time: "2m", icon: Heart },
  { id: "n2", user: users[1], type: "follow" as const, text: "started following you.", time: "15m", icon: UserPlus },
  { id: "n3", user: users[2], type: "comment" as const, text: 'commented: "Amazing shot! 🔥"', time: "1h", icon: MessageCircle },
  { id: "n4", user: users[3], type: "mention" as const, text: "mentioned you in a story.", time: "3h", icon: AtSign },
  { id: "n5", user: users[4], type: "like" as const, text: "liked your reel.", time: "5h", icon: Heart },
  { id: "n6", user: users[5], type: "follow" as const, text: "started following you.", time: "1d", icon: UserPlus },
];

const Notifications = () => {
  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 pt-4">
        <h1 className="font-display font-semibold text-xl text-foreground mb-4">Notifications</h1>

        <div className="space-y-1">
          {notifications.map(({ id, user, text, time, icon: Icon }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{user.username}</span>{" "}
                  <span className="text-secondary-foreground">{text}</span>
                </p>
                <span className="text-xs text-muted-foreground">{time} ago</span>
              </div>
              <Icon size={16} className="text-muted-foreground flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Notifications;
