import { gql } from "@apollo/client";

export const GET_ALL_POST = gql`
{
  posts {
    nodes {
      id
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          id
        }
      }
      content
      author {
        node {
          id
        }
      }
    }
  }
}
`;