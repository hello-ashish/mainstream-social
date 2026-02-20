import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, Search, Compass, Film, MessageCircle, Heart, PlusSquare, User, Menu, X
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: Film, label: "Reels", path: "/reels" },
  { icon: MessageCircle, label: "Messages", path: "/messages" },
  { icon: Heart, label: "Notifications", path: "/notifications" },
  { icon: PlusSquare, label: "Create", path: "/create" },
  { icon: User, label: "Profile", path: "/profile" },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  return (
    <motion.aside
      animate={{ width: expanded ? 240 : 72 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="hidden md:flex flex-col fixed left-0 top-0 h-screen z-50 bg-background border-r border-border"
    >
      <div className="flex items-center h-16 px-4">
        <Link to="/" className="flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <span className="font-display font-bold text-primary-foreground text-sm">M</span>
          </div>
          <AnimatePresence>
            {expanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="font-display font-bold text-xl gradient-text whitespace-nowrap"
              >
                MainStream
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>

      <nav className="flex-1 flex flex-col gap-1 px-2 mt-4">
        {navItems.map(({ icon: Icon, label, path }) => {
          const active = location.pathname === path;
          return (
            <Link key={path} to={path}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors cursor-pointer ${
                  active
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                }`}
              >
                <Icon size={22} className={active ? "text-primary" : ""} />
                <AnimatePresence>
                  {expanded && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className={`text-sm whitespace-nowrap ${active ? "font-semibold" : "font-medium"}`}
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="px-2 pb-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-3 px-3 py-3 rounded-lg text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors w-full"
        >
          {expanded ? <X size={22} /> : <Menu size={22} />}
          <AnimatePresence>
            {expanded && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm font-medium"
              >
                Collapse
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
