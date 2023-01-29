import React from 'react'
import {gql, useQuery} from "@apollo/client"
import client from "../../apollo-client";

const GET_ALL_POST = gql`
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
`

const Posts = ({test}) => {
    console.log(test)
    return (
        <div>
            {/*{posts?.nodes.map((post, i) => {*/}
            {/*    return (*/}
            {/*        <div>*/}
            {/*            <p>{post?.title}</p>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            test: []
        }, // will be passed to the page component as props
    }
}

export default Posts
