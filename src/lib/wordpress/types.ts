// ============================================
// Tipos específicos para la API de WordPress
// ============================================

export interface WordPressPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails?: {
        width: number;
        height: number;
      };
    };
  };
  categories: {
    nodes: Array<{
      id: string;
      name: string;
      slug: string;
    }>;
  };
  author: {
    node: {
      name: string;
      avatar: {
        url: string;
      };
    };
  };
  seo?: {
    title: string;
    metaDesc: string;
    opengraphImage?: {
      sourceUrl: string;
    };
  };
}

export interface WordPressCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  count?: number;
}

export interface PostsQueryResponse {
  posts: {
    nodes: WordPressPost[];
    pageInfo?: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
}

export interface PostQueryResponse {
  postBy: WordPressPost | null;
}

export interface CategoriesQueryResponse {
  categories: {
    nodes: WordPressCategory[];
  };
}