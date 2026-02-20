import avatar1 from "@/assets/default-avatar-1.jpg";
import avatar3 from "@/assets/default-avatar-3.jpg";
import avatar4 from "@/assets/default-avatar-4.jpg";
import avatar5 from "@/assets/default-avatar-5.jpg";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";

export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio?: string;
  verified?: boolean;
  followers: number;
  following: number;
  posts: number;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  liked?: boolean;
  saved?: boolean;
}

export interface Story {
  id: string;
  user: User;
  seen: boolean;
}

export const currentUser: User = {
  id: "1",
  username: "mainstream_user",
  displayName: "Alex Rivera",
  avatar: avatar1,
  bio: "Digital creator ✨ | Building the future",
  verified: true,
  followers: 12400,
  following: 892,
  posts: 156,
};

export const users: User[] = [
  { id: "2", username: "nova.lens", displayName: "Nova Chen", avatar: avatar3, verified: true, followers: 45000, following: 320, posts: 890 },
  { id: "3", username: "aria.creates", displayName: "Aria Johnson", avatar: avatar4, followers: 23000, following: 540, posts: 432 },
  { id: "4", username: "kai.explores", displayName: "Kai Tanaka", avatar: avatar5, followers: 8900, following: 210, posts: 267 },
  { id: "5", username: "luna.studio", displayName: "Luna Park", avatar: avatar1, verified: true, followers: 67000, following: 180, posts: 1200 },
  { id: "6", username: "zephyr.art", displayName: "Zeph Williams", avatar: avatar3, followers: 15000, following: 430, posts: 345 },
  { id: "7", username: "ember.wave", displayName: "Ember Davis", avatar: avatar4, followers: 31000, following: 290, posts: 678 },
];

export const stories: Story[] = [
  { id: "s1", user: currentUser, seen: false },
  { id: "s2", user: users[0], seen: false },
  { id: "s3", user: users[1], seen: false },
  { id: "s4", user: users[2], seen: true },
  { id: "s5", user: users[3], seen: false },
  { id: "s6", user: users[4], seen: true },
  { id: "s7", user: users[5], seen: false },
];

export const posts: Post[] = [
  {
    id: "p1",
    user: users[0],
    image: post1,
    caption: "City lights never sleep 🌃 #nightlife #urban #cyberpunk",
    likes: 2847,
    comments: 134,
    timestamp: "2h",
    liked: false,
    saved: false,
  },
  {
    id: "p2",
    user: users[1],
    image: post2,
    caption: "Morning rituals ☕ Finding peace in the little things ✨",
    likes: 1523,
    comments: 89,
    timestamp: "4h",
    liked: true,
    saved: false,
  },
  {
    id: "p3",
    user: users[2],
    image: post3,
    caption: "Above the clouds, above the noise 🏔️ #mountains #adventure",
    likes: 4291,
    comments: 267,
    timestamp: "6h",
    liked: false,
    saved: true,
  },
  {
    id: "p4",
    user: users[3],
    image: post4,
    caption: "Paradise found 🌴 Where the sky meets the ocean 🌅",
    likes: 6103,
    comments: 412,
    timestamp: "8h",
    liked: false,
    saved: false,
  },
];

export const suggestedUsers = users.slice(2, 6);

export function formatCount(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
}
