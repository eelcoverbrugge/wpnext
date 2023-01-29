import React, {useEffect} from 'react'
import client from '../../apollo-client'
import {gql} from "@apollo/client";

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

const Pages = ({ posts }) => {
    // useEffect(() => {
    //     const headers = { 'Content-Type': 'application/json' }
    //     const res = fetch('http://localhost:8080/graphql', {
    //         method: 'POST',
    //         headers,
    //         body: JSON.stringify({
    //             GET_ALL_POST
    //         }),
    //     })
    //
    //     const json = res.json()
    //     if (json.errors) {
    //         console.error(json.errors)
    //         throw new Error('Failed to fetch API')
    //     }
    //     console.log(json.data)
    // }, []);

    return (
        <div>
            {posts?.map((post, i) => {
                return (
                    <div>
                        <p key={i}>{post?.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Pages

export const getStaticProps = async () => {
    const response = await client.query({
        query: GET_ALL_POST,
    })

    const posts = response?.data?.posts?.nodes

    return {
        props: {
            posts,
        },
    }
}
