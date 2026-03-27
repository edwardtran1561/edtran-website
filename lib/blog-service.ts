// Blog service - handles all Notion blog data fetching
import notion from "./notion";
import { BlogPost, NotionPage } from "@/types/blog";

const DATABASE_ID = process.env.NOTION_DATABASE_ID || "";

function parseNotionPage(page: NotionPage): BlogPost {
  const { properties } = page;

  const title = properties.Title?.title[0]?.text.content ?? "Untitled";
  const slug =
    properties.Slug?.rich_text[0]?.text.content ??
    title.toLowerCase().replace(/\s+/g, "-");
  const description = properties.Description?.rich_text[0]?.text.content ?? "";
  const tags = properties.Tags?.multi_select.map((tag) => tag.name) ?? [];
  const author = properties.Author?.people[0]?.name ?? "Edward Tran";
  const publishedAt =
    properties["Published At"]?.date.start ?? page.created_time;
  const updatedAt =
    properties["Updated At"]?.date.start ?? page.last_edited_time;
  const featured = properties.Featured?.checkbox ?? false;
  const coverImage = properties["Cover Image"]?.files[0]?.file?.url;

  return {
    id: page.id,
    title,
    slug,
    description,
    content: "",
    tags,
    author,
    publishedAt,
    updatedAt,
    featured,
    coverImage,
  };
}

async function queryDatabase(featured?: boolean): Promise<NotionPage[]> {
  try {
    const response = await notion.search({
      query: "",
      filter: { value: "page", property: "object" },
      page_size: 100,
    });

    const results = response.results.filter((item) => {
      const parent = (item as Record<string, unknown>).parent as Record<
        string,
        unknown
      >;
      return parent?.database_id === DATABASE_ID;
    }) as unknown as NotionPage[];

    const published = results.filter(
      (page) => page.properties.Published?.checkbox === true,
    );

    if (featured) {
      return published.filter(
        (page) => page.properties.Featured?.checkbox === true,
      );
    }

    return published;
  } catch (error) {
    console.error("Error querying database:", error);
    return [];
  }
}

function sortByDate(posts: BlogPost[]): BlogPost[] {
  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const results = await queryDatabase();
    return sortByDate(results.map(parseNotionPage));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  try {
    const results = await queryDatabase(true);
    return sortByDate(results.map(parseNotionPage));
  } catch (error) {
    console.error("Error fetching featured blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  try {
    const results = await queryDatabase();
    const page = results.find(
      (p) => p.properties.Slug?.rich_text[0]?.text.content === slug,
    );

    if (!page) return null;

    const post = parseNotionPage(page);
    post.content = await getPageContent(page.id);
    return post;
  } catch (error) {
    console.error(`Error fetching blog post "${slug}":`, error);
    return null;
  }
}

type RichTextItem = { plain_text: string };

function extractText(blockContent: Record<string, unknown>): string {
  const richText = blockContent.rich_text as RichTextItem[] | undefined;
  return richText?.map((t) => t.plain_text).join("") ?? "";
}

function toHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export async function getPageContent(pageId: string): Promise<string> {
  try {
    const { results } = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });

    // First pass: collect headings for TOC generation
    const headings: { level: number; text: string; id: string }[] = [];
    for (const block of results) {
      const b = block as Record<string, unknown>;
      const type = b.type as string;
      if (type !== "heading_1" && type !== "heading_2" && type !== "heading_3")
        continue;
      const blockContent = b[type] as Record<string, unknown> | undefined;
      if (!blockContent) continue;
      const text = extractText(blockContent);
      if (!text) continue;
      headings.push({
        level: parseInt(type.slice(-1)),
        text,
        id: toHeadingId(text),
      });
    }

    const buildToc = (): string => {
      if (headings.length === 0) return "";
      const items = headings
        .map(({ level, text, id }) => {
          const indent = (level - 1) * 16;
          return `<li style="margin-left:${indent}px"><a href="#${id}" class="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">${text}</a></li>`;
        })
        .join("");
      return `<nav class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 mb-8"><p class="font-semibold text-gray-900 dark:text-white mb-3">Table of Contents</p><ul class="space-y-1">${items}</ul></nav>`;
    };

    // Second pass: render blocks
    return results.reduce((content, block) => {
      const b = block as Record<string, unknown>;
      const type = b.type as string;

      if (type === "table_of_contents") {
        return content + buildToc();
      }

      const blockContent = b[type] as Record<string, unknown> | undefined;
      if (!blockContent) return content;

      const text = extractText(blockContent);
      if (!text) return content;

      switch (type) {
        case "paragraph":
          return (
            content +
            `<p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">${text}</p>`
          );
        case "heading_1": {
          const id = toHeadingId(text);
          return (
            content +
            `<h2 id="${id}" class="text-4xl font-bold text-gray-900 dark:text-white mt-10 mb-4">${text}</h2>`
          );
        }
        case "heading_2": {
          const id = toHeadingId(text);
          return (
            content +
            `<h3 id="${id}" class="text-3xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">${text}</h3>`
          );
        }
        case "heading_3": {
          const id = toHeadingId(text);
          return (
            content +
            `<h4 id="${id}" class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-2">${text}</h4>`
          );
        }
        case "bulleted_list_item":
          return (
            content +
            `<li class="text-base text-gray-700 dark:text-gray-300 leading-relaxed ml-6 mb-1 list-disc">${text}</li>`
          );
        case "numbered_list_item":
          return (
            content +
            `<li class="text-base text-gray-700 dark:text-gray-300 leading-relaxed ml-6 mb-1 list-decimal">${text}</li>`
          );
        case "code": {
          const language = (blockContent.language as string) || "plaintext";
          return (
            content +
            `<pre class="bg-gray-900 dark:bg-gray-950 rounded-xl p-4 my-4 overflow-x-auto"><code class="language-${language} text-sm text-gray-100 font-mono">${text}</code></pre>`
          );
        }
        case "quote":
          return (
            content +
            `<blockquote class="border-l-4 border-indigo-500 pl-4 my-4 italic text-gray-600 dark:text-gray-400">${text}</blockquote>`
          );
        default:
          return content;
      }
    }, "");
  } catch (error) {
    console.error(`Error fetching page content for "${pageId}":`, error);
    return "";
  }
}
