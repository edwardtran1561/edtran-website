import ArticleList from "@/features/blog/components/article-list";
import Container from "@/components/ui/container";

export default function BlogPage() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-5 pl-3 border-l-3 border-indigo-600 text-gray-600">
        Latest Posts
      </h1>
      <ArticleList />
    </Container>
  );
}
