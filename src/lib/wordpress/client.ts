import { GraphQLClient } from 'graphql-request';

// Obtener la URL del endpoint GraphQL desde las variables de entorno
const endpoint = import.meta.env.WORDPRESS_GRAPHQL_URL || 'https://blog.sicastro.com/graphql';

// Crear el cliente GraphQL
export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función helper para manejar errores de GraphQL
export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  try {
    const data = await graphqlClient.request<T>(query, variables);
    return data;
  } catch (error) {
    console.error('Error fetching from WordPress GraphQL:', error);
    throw error;
  }
}