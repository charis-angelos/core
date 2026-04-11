import Link from "next/link";

export const metadata = {
  title: "关于我 · Charis Style",
  description: "了解女装主播 Charis 的故事，以及她的直播和时尚分享理念。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-200 to-pink-100 flex items-center justify-center text-5xl mx-auto mb-4">
          🌸
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-1">你好，我是 Charis</h1>
        <p className="text-gray-400 text-sm">女装主播 · 时尚博主 · 穿搭爱好者</p>
      </div>

      {/* Bio */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-50 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-rose-400">✦</span> 关于我
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            大家好！我是 Charis，一名热爱时尚的女装主播。从大学时就开始研究穿搭，
            毕业后毅然决定把爱好变成事业，开始了直播生涯。
          </p>
          <p>
            在直播间里，我不只是卖衣服，更喜欢分享穿搭的逻辑和技巧——
            同样一件衣服，怎么搭配能穿出 10 种不同的风格？
            什么颜色最适合你的肤色？怎么用基础款搭出高级感？
            这些都是我最爱聊的话题。
          </p>
          <p>
            这个博客是我的文字角落，会分享更多直播里来不及细说的穿搭心得，
            流行趋势分析，以及一些好看好用的单品推荐。希望能帮助每一个爱美的你！
          </p>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: "🎙️", title: "直播主场", desc: "抖音、淘宝、小红书三平台同播，每天准时上线" },
          { icon: "👗", title: "专注女装", desc: "从日系到欧美，从通勤到约会，各种风格都有" },
          { icon: "💡", title: "干货分享", desc: "不只卖货，更分享穿搭技巧、选衣逻辑" },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl p-5 shadow-sm border border-pink-50 text-center"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Social */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 text-center border border-rose-100">
        <h2 className="text-xl font-bold text-gray-800 mb-2">找到我 🌸</h2>
        <p className="text-gray-500 text-sm mb-6">各平台搜索「Charis Style」</p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { name: "抖音", handle: "@CharisStyle" },
            { name: "小红书", handle: "@CharisStyle" },
            { name: "淘宝直播", handle: "Charis Style" },
            { name: "微博", handle: "@CharisStyle" },
          ].map((s) => (
            <div
              key={s.name}
              className="bg-white px-4 py-2 rounded-full text-sm border border-rose-100 text-gray-600"
            >
              <span className="font-medium text-rose-500">{s.name}</span>{" "}
              {s.handle}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link
          href="/blog"
          className="inline-block bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors font-medium"
        >
          去看看我的穿搭文章 →
        </Link>
      </div>
    </div>
  );
}
