import Link from "next/link";
import { PostMeta, formatDate } from "@/lib/posts";

interface PostCardProps {
  post: PostMeta;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-pink-50">
          <div className="h-52 bg-gradient-to-br from-rose-100 to-pink-50 flex items-center justify-center">
            <span className="text-6xl">👗</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-rose-50 text-rose-500 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-lg font-bold text-gray-800 group-hover:text-rose-500 transition-colors leading-snug mb-2">
              {post.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
              {post.excerpt}
            </p>
            <time className="text-xs text-gray-400">{formatDate(post.date)}</time>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-pink-50 flex gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-50 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">👗</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-1 mb-1">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-rose-50 text-rose-500 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-gray-800 group-hover:text-rose-500 transition-colors text-sm leading-snug mb-1 line-clamp-2">
            {post.title}
          </h3>
          <time className="text-xs text-gray-400">{formatDate(post.date)}</time>
        </div>
      </article>
    </Link>
  );
}
