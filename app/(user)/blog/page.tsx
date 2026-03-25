import Container from "@/components/ui/container";
import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";
import { getAllBlogPosts, getFeaturedBlogPosts } from "@/lib/blog-service";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
  const [allPosts, featuredPosts] = await Promise.all([
    getAllBlogPosts(),
    getFeaturedBlogPosts(),
  ]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Container>
          <div className="flex flex-col gap-6 max-w-2xl">
            <Badge variant="primary" size="md">
              Blog
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
              Latest Articles
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Thoughts, stories, and ideas about web development, technology,
              and programming.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white dark:bg-gray-800">
          <Container>
            <div className="flex flex-col gap-12">
              {/* Section Header */}
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                  Featured Articles
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Must-read articles
                </p>
              </div>

              {/* Featured Posts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card
                      hoverable
                      className="flex flex-col gap-4 h-full overflow-hidden"
                    >
                      {/* Cover Image */}
                      {post.coverImage && (
                        <div className="w-full h-48 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg overflow-hidden">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            width={500}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex flex-col gap-3 flex-grow">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                          {post.description}
                        </p>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" size="sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User size={14} />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>
                                {new Date(post.publishedAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                          </div>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="flex flex-col gap-12">
            {/* Section Header */}
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                {featuredPosts.length > 0 ? "All Articles" : "Latest Articles"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {featuredPosts.length > 0
                  ? "Browse all articles"
                  : "Read my latest thoughts and ideas"}
              </p>
            </div>

            {/* Posts List */}
            {allPosts.length > 0 ? (
              <div className="flex flex-col gap-6">
                {allPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card
                      hoverable
                      className="flex flex-col md:flex-row gap-6 overflow-hidden"
                    >
                      {/* Cover Image */}
                      {post.coverImage && (
                        <div className="w-full md:w-48 h-48 md:h-auto bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex flex-col gap-3 flex-grow">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                            {post.description}
                          </p>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-col gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" size="sm">
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 3 && (
                              <Badge variant="secondary" size="sm">
                                +{post.tags.length - 3}
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <User size={14} />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                <span>
                                  {new Date(post.publishedAt).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                    }
                                  )}
                                </span>
                              </div>
                            </div>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  No articles yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
