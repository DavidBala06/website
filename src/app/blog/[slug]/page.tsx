import PageTransition from "@/components/PageTransition";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/markdown";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageTransition>
      <article className="container mx-auto px-4 py-24 max-w-3xl">
        <Button asChild variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to writings
          </Link>
        </Button>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <time className="text-muted-foreground font-medium">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none prose-lg">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </PageTransition>
  );
}
