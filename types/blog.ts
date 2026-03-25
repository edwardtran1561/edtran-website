export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  coverImage?: string;
}

export interface NotionPage {
  id: string;
  properties: {
    Title?: {
      title: Array<{
        text: {
          content: string;
        };
      }>;
    };
    Slug?: {
      rich_text: Array<{
        text: {
          content: string;
        };
      }>;
    };
    Description?: {
      rich_text: Array<{
        text: {
          content: string;
        };
      }>;
    };
    Tags?: {
      multi_select: Array<{
        name: string;
      }>;
    };
    Author?: {
      rich_text: Array<{
        text: {
          content: string;
        };
      }>;
    };
    "Published At"?: {
      date: {
        start: string;
      };
    };
    "Updated At"?: {
      date: {
        start: string;
      };
    };
    Featured?: {
      checkbox: boolean;
    };
    Published?: {
      checkbox: boolean;
    };
    "Cover Image"?: {
      url: string;
    };
  };
  created_time: string;
  last_edited_time: string;
  parent?: {
    database_id?: string;
  };
}
