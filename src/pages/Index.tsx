import AppLayout from "@/components/layout/AppLayout";
import StoriesBar from "@/components/feed/StoriesBar";
import PostCard from "@/components/feed/PostCard";
import SuggestedUsers from "@/components/feed/SuggestedUsers";
import { posts } from "@/data/mockData";

const Index = () => {
  return (
    <AppLayout>
      <div className="max-w-[940px] mx-auto px-4 pt-4">
        <div className="flex gap-8">
          {/* Main Feed */}
          <div className="flex-1 max-w-[470px] mx-auto lg:mx-0">
            <StoriesBar />
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block w-[320px] flex-shrink-0 pt-2">
            <div className="sticky top-4">
              <SuggestedUsers />
              <p className="mt-6 text-xs text-muted-foreground/50">
                © 2026 MainStream · About · Help · Privacy · Terms
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
