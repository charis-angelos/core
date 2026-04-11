import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} · Charis Style`,
      description: post.excerpt,
    };
  } catch {
    return { title: "文章未找到" };
  }
}

function renderMarkdown(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    .replace(/^```[\s\S]*?```$/gm, (match) => {
      const code = match.replace(/^```\n?/, '').replace(/\n?```$/, '');
      return `<code>${code}</code>`;
    })
    .replace(/^---$/gm, '<hr />')
    .replace(/^(?!<[hul]|<li|<hr|<code)(.+)$/gm, '<p>$1</p>')
    .replace(/\n{2,}/g, '\n');
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const html = renderMarkdown(post.content);

  return (
    <article className="max-w-2xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-rose-500">首页</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-rose-500">博客</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{post.title}</span>
      </nav>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-rose-50 text-rose-500 px-2 py-0.5 rounded-full border border-rose-100"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-3">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-3 text-sm text-gray-400 mb-8 pb-6 border-b border-pink-100">
        <span className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center text-sm">
          🌸
        </span>
        <span className="font-medium text-gray-600">Charis</span>
        <span>·</span>
        <time>{formatDate(post.date)}</time>
      </div>

      {/* Content */}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Back */}
      <div className="mt-12 pt-6 border-t border-pink-100">
        <Link
          href="/blog"
          className="text-rose-500 hover:underline text-sm font-medium"
        >
          ← 返回博客列表
        </Link>
      </div>
    </article>
  );
}
