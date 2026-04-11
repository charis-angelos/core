export default function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-white mt-20">
      <div className="max-w-4xl mx-auto px-6 py-10 text-center">
        <span className="text-2xl">🌸</span>
        <p className="mt-2 text-rose-500 font-semibold text-lg">Charis Style</p>
        <p className="text-gray-400 text-sm mt-1">女装主播 · 时尚分享 · 穿搭灵感</p>
        <div className="flex justify-center gap-6 mt-4 text-sm text-gray-400">
          <span>小红书：@CharisStyle</span>
          <span>·</span>
          <span>抖音：@CharisStyle</span>
          <span>·</span>
          <span>微博：@CharisStyle</span>
        </div>
        <p className="text-gray-300 text-xs mt-6">
          © {new Date().getFullYear()} Charis Style. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
