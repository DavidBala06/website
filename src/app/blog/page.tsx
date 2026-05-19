import PageTransition from "@/components/PageTransition";
import { getBlogPosts } from "@/lib/markdown";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function BlogList() {
  const posts = getBlogPosts();

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Writings</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Thoughts on AI, Physics, and the future of computation.
        </p>

        <div className="flex flex-col gap-6">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No posts found. Create one in `content/blog/` to see it here!</p>
          ) : (
            posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <Card className="hover:border-primary/50 transition-colors group cursor-pointer border-border/50">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <time className="text-sm text-muted-foreground font-medium">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </PageTransition>
  );
}
