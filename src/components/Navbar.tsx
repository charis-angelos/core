import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-pink-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌸</span>
          <span className="text-xl font-bold text-rose-500 tracking-wide">
            Charis Style
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link
            href="/"
            className="hover:text-rose-500 transition-colors"
          >
            首页
          </Link>
          <Link
            href="/blog"
            className="hover:text-rose-500 transition-colors"
          >
            博客
          </Link>
          <Link
            href="/about"
            className="hover:text-rose-500 transition-colors"
          >
            关于我
          </Link>
          <a
            href="#"
            className="bg-rose-500 text-white px-4 py-1.5 rounded-full hover:bg-rose-600 transition-colors"
          >
            进直播间
          </a>
        </nav>
      </div>
    </header>
  );
}
