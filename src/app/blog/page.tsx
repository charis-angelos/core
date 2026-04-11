import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "博客 · Charis Style",
  description: "浏览所有穿搭文章、直播技巧和时尚趋势分享。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">时尚博客</h1>
        <p className="text-gray-400 text-sm">
          穿搭灵感 · 直播干货 · 流行趋势，一起变美~
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {allTags.map((tag) => (
          <span
            key={tag}
            className="bg-rose-50 text-rose-500 px-3 py-1 rounded-full text-sm border border-rose-100"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Post List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
