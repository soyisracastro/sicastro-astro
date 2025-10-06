// ============================================
// Queries GraphQL para WordPress
// ============================================

// Query para obtener múltiples posts
export const GET_POSTS = `
  query GetPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

// Query para obtener un post individual por slug
export const GET_POST_BY_SLUG = `
  query GetPost($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      content
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      categories {
        nodes {
          id
          name
          slug
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
    }
  }
`;

// Query para obtener un post con datos SEO (requiere WPGraphQL for Yoast SEO)
export const GET_POST_BY_SLUG_WITH_SEO = `
  query GetPost($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      content
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      categories {
        nodes {
          id
          name
          slug
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;

// Query para obtener todas las categorías
export const GET_CATEGORIES = `
  query GetCategories {
    categories(first: 100, where: { hideEmpty: true }) {
      nodes {
        id
        name
        slug
        description
        count
      }
    }
  }
`;

// Query para obtener posts por categoría
export const GET_POSTS_BY_CATEGORY = `
  query GetPostsByCategory($categorySlug: String!, $first: Int = 10) {
    posts(first: $first, where: { categoryName: $categorySlug, status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

// Query para obtener posts relacionados
export const GET_RELATED_POSTS = `
  query GetRelatedPosts($categorySlug: String!, $excludeId: ID!, $first: Int = 3) {
    posts(first: $first, where: { categoryName: $categorySlug, notIn: [$excludeId], status: PUBLISH }) {
      nodes {
        id
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

// Query para buscar posts
export const SEARCH_POSTS = `
  query SearchPosts($searchTerm: String!, $first: Int = 10) {
    posts(first: $first, where: { search: $searchTerm, status: PUBLISH }) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;