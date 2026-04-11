import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-[#fdf6f0] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-400 text-sm tracking-widest uppercase mb-3 font-medium">
            Fashion · Style · Beauty
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            你好，我是 <span className="text-rose-500">Charis</span> 🌸
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            女装主播，时尚爱好者。在这里分享穿搭灵感、直播干货和流行趋势，
            让每一天都美美哒~
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/blog"
              className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition-colors font-medium"
            >
              浏览博客
            </Link>
            <Link
              href="/about"
              className="border border-rose-200 text-rose-500 px-6 py-3 rounded-full hover:bg-rose-50 transition-colors font-medium"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-pink-50 py-5">
        <div className="max-w-4xl mx-auto px-6 flex justify-center gap-12 text-center">
          {[
            { label: "篇文章", value: posts.length.toString() },
            { label: "直播场次", value: "300+" },
            { label: "粉丝", value: "10W+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-rose-500">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">最新文章</h2>
          <Link
            href="/blog"
            className="text-sm text-rose-500 hover:underline font-medium"
          >
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} featured />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-rose-400 to-pink-400 py-12 px-6 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">每天直播，等你来玩~</h2>
        <p className="text-rose-100 mb-6 text-sm">
          抖音 / 小红书 / 淘宝直播，搜索「Charis Style」找到我
        </p>
        <a
          href="#"
          className="inline-block bg-white text-rose-500 font-semibold px-8 py-3 rounded-full hover:bg-rose-50 transition-colors"
        >
          进入直播间
        </a>
      </section>
    </div>
  );
}
