export const revalidate = 60;

import Container from "@/components/ui/container";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog-service";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Container>
          <div className="flex flex-col gap-6 max-w-3xl">
            {/* Back Button */}
            <Link href="/blog">
              <Button
                variant="secondary"
                size="sm"
                className="w-fit flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Button>
            </Link>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {post.description}
            </p>

            {/* Meta */}
            <div className="flex flex-col gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="py-8 bg-white dark:bg-gray-800">
          <Container>
            <div className="w-full h-96 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <Container>
          <div className="max-w-3xl mx-auto">
            <article
              className="prose prose-invert max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                More Articles
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Check out more articles from the blog
              </p>
            </div>

            <Link href="/blog">
              <Button variant="primary" size="lg">
                View All Articles
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
