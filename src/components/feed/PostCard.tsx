import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { type Post, formatCount } from "@/data/mockData";

const PostCard = ({ post, index }: { post: Post; index: number }) => {
  const [liked, setLiked] = useState(post.liked);
  const [saved, setSaved] = useState(post.saved);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showHeart, setShowHeart] = useState(false);

  const handleDoubleTap = () => {
    if (!liked) {
      setLiked(true);
      setLikesCount((c) => c + 1);
    }
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 800);
  };

  const toggleLike = () => {
    setLiked(!liked);
    setLikesCount((c) => (liked ? c - 1 : c + 1));
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="glass-panel overflow-hidden mb-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <div className="story-ring">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-background">
              <img src={post.user.avatar} alt={post.user.username} className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-foreground">{post.user.username}</span>
              {post.user.verified && (
                <div className="w-3.5 h-3.5 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-[8px] text-primary-foreground font-bold">✓</span>
                </div>
              )}
            </div>
            <span className="text-xs text-muted-foreground">{post.timestamp} ago</span>
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors p-1">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Image */}
      <div className="relative aspect-[4/5] bg-secondary cursor-pointer" onDoubleClick={handleDoubleTap}>
        <img src={post.image} alt="Post" className="w-full h-full object-cover" />
        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", damping: 10 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Heart size={80} className="text-primary fill-primary drop-shadow-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <motion.button whileTap={{ scale: 1.3 }} onClick={toggleLike}>
              <Heart
                size={24}
                className={`transition-colors ${liked ? "text-accent fill-accent" : "text-foreground hover:text-muted-foreground"}`}
              />
            </motion.button>
            <button className="text-foreground hover:text-muted-foreground transition-colors">
              <MessageCircle size={24} />
            </button>
            <button className="text-foreground hover:text-muted-foreground transition-colors">
              <Send size={22} />
            </button>
          </div>
          <motion.button whileTap={{ scale: 1.2 }} onClick={() => setSaved(!saved)}>
            <Bookmark
              size={24}
              className={`transition-colors ${saved ? "text-primary fill-primary" : "text-foreground hover:text-muted-foreground"}`}
            />
          </motion.button>
        </div>

        <p className="text-sm font-semibold text-foreground mb-1">{formatCount(likesCount)} likes</p>
        <p className="text-sm text-foreground">
          <span className="font-semibold">{post.user.username}</span>{" "}
          <span className="text-secondary-foreground">{post.caption}</span>
        </p>
        {post.comments > 0 && (
          <button className="text-sm text-muted-foreground mt-1">
            View all {formatCount(post.comments)} comments
          </button>
        )}
      </div>
    </motion.article>
  );
};

export default PostCard;
