import React from 'react'
import {gql, useQuery} from "@apollo/client"

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

const Posts = () => {
    const {loading, error, data} = useQuery(GET_ALL_POST)

    if(loading) {
        return <h1>Loading...</h1>
    }
console.log('data', data)
    return (
        <div>
            {data?.posts?.nodes.map((post, i) => {
                return (
                    <div>
                        <p>{post?.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts
