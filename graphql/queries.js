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

export const GET_HOMEPAGE = gql`
{
  nodeByUri(uri: "/") {
    ... on Page {
        id
        title
        blocksJSON
    }
  }
}
`;
