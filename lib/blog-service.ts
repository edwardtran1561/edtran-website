import notion from "./notion";
import { BlogPost, NotionPage } from "@/types/blog";

const DATABASE_ID = process.env.NOTION_DATABASE_ID || "";

/**
 * Parse Notion page to BlogPost
 */
function parseNotionPage(page: NotionPage): BlogPost {
  const properties = page.properties;

  const title = properties.Title?.title[0]?.text.content || "Untitled";
  const slug =
    properties.Slug?.rich_text[0]?.text.content ||
    title.toLowerCase().replace(/\s+/g, "-");
  const description = properties.Description?.rich_text[0]?.text.content || "";
  const tags = properties.Tags?.multi_select.map((tag) => tag.name) || [];
  const author = properties.Author?.people[0]?.name || "Edward Tran";
  const publishedAt =
    properties["Published At"]?.date.start || page.created_time;
  const updatedAt =
    properties["Updated At"]?.date.start || page.last_edited_time;
  const featured = properties.Featured?.checkbox || false;
  const coverImage = properties["Cover Image"]?.files[0]?.file?.url;

  return {
    id: page.id,
    title,
    slug,
    description,
    content: "", // Will be fetched separately
    tags,
    author,
    publishedAt,
    updatedAt,
    featured,
    coverImage,
  };
}

/**
 * Query database using search
 */
async function queryDatabase(
  filter?: Record<string, unknown>,
): Promise<NotionPage[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await (notion as any).search({
      query: "",
      filter: {
        value: "page",
        property: "object",
      },
      page_size: 100,
    });

    // Filter results to only include pages from our database
    const results = response.results.filter((item: Record<string, unknown>) => {
      const parent = item.parent as Record<string, unknown>;
      const itemDatabaseId = parent?.database_id;
      return itemDatabaseId === DATABASE_ID;
    }) as NotionPage[];

    // Apply additional filters if provided
    if (filter) {
      return results.filter((page) => {
        const properties = page.properties;

        // Check Featured filter
        if (filter.featured === true) {
          const featured = properties.Featured?.checkbox;
          if (!featured) return false;
        }

        return true;
      });
    }

    return results;
  } catch (error) {
    console.error("❌ Error querying database:", error);
    return [];
  }
}

/**
 * Get all blog posts from Notion
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const results = await queryDatabase();

    const posts = results
      .map((page) => parseNotionPage(page))
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );

    return posts;
  } catch (error) {
    console.error("Error fetching blog posts from Notion:", error);
    return [];
  }
}

/**
 * Get featured blog posts
 */
export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  try {
    const results = await queryDatabase({ featured: true });

    const posts = results
      .map((page) => parseNotionPage(page))
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );

    return posts;
  } catch (error) {
    console.error("Error fetching featured blog posts from Notion:", error);
    return [];
  }
}

/**
 * Get blog post by slug
 */
export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  try {
    const results = await queryDatabase();

    const page = results.find((p) => {
      const slugValue = p.properties.Slug?.rich_text[0]?.text.content;
      return slugValue === slug;
    });

    if (!page) {
      return null;
    }

    const post = parseNotionPage(page);

    // Fetch page content
    const content = await getPageContent(page.id);
    post.content = content;

    return post;
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Get page content from Notion blocks
 */
export async function getPageContent(pageId: string): Promise<string> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const blocks = await (notion as any).blocks.children.list({
      block_id: pageId,
    });

    const blockResults = blocks.results as Array<Record<string, unknown>>;

    let content = "";

    for (const block of blockResults) {
      const blockData = block;

      if (blockData.type === "paragraph") {
        const paragraph = blockData.paragraph as Record<string, unknown>;
        const richText = paragraph.rich_text as Array<{ plain_text: string }>;
        const text = richText.map((t) => t.plain_text).join("");
        if (text) content += `<p>${text}</p>`;
      } else if (blockData.type === "heading_1") {
        const heading = blockData.heading_1 as Record<string, unknown>;
        const richText = heading.rich_text as Array<{ plain_text: string }>;
        const text = richText.map((t) => t.plain_text).join("");
        if (text) content += `<h1>${text}</h1>`;
      } else if (blockData.type === "heading_2") {
        const heading = blockData.heading_2 as Record<string, unknown>;
        const richText = heading.rich_text as Array<{ plain_text: string }>;
        const text = richText.map((t) => t.plain_text).join("");
        if (text) content += `<h2>${text}</h2>`;
      } else if (blockData.type === "heading_3") {
        const heading = blockData.heading_3 as Record<string, unknown>;
        const richText = heading.rich_text as Array<{ plain_text: string }>;
        const text = richText.map((t) => t.plain_text).join("");
        if (text) content += `<h3>${text}</h3>`;
      } else if (blockData.type === "bulleted_list_item") {
        const item = blockData.bulleted_list_item as Record<string, unknown>;
        const richText = item.rich_text as Array<{ plain_text: string }>;
        const text = richText.map((t) => t.plain_text).join("");
        if (text) content += `<li>${text}</li>`;
      } else if (blockData.type === "numbered_list_item") {
        const item = blockData.numbered_list_item as Record<string, unknown>;
        const richText = item.rich_text as Array<{ plain_text: string }>;
        const text = richText.map((t) => t.plain_text).join("");
        if (text) content += `<li>${text}</li>`;
      } else if (blockData.type === "code") {
        const code = blockData.code as Record<string, unknown>;
        const richText = code.rich_text as Array<{ plain_text: string }>;
        const text = richText.map((t) => t.plain_text).join("");
        const language = (code.language as string) || "plaintext";
        if (text)
          content += `<pre><code class="language-${language}">${text}</code></pre>`;
      } else if (blockData.type === "quote") {
        const quote = blockData.quote as Record<string, unknown>;
        const richText = quote.rich_text as Array<{ plain_text: string }>;
        const text = richText.map((t) => t.plain_text).join("");
        if (text) content += `<blockquote>${text}</blockquote>`;
      }
    }

    return content;
  } catch (error) {
    console.error(`Error fetching page content for "${pageId}":`, error);
    return "";
  }
}
