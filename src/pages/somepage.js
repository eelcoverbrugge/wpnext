import React from 'react'
import Link from "next/link";
import {gql} from "@apollo/client";
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

const SomePage = ({ data, posts }) => {
    console.log(posts)
    return (
        <div>
            <Link href="/somepage">Somepage</Link>
            <Link href="/test">Test</Link>
            <ul>
                {data.map((item, i) => (
                    <div key={i}>{item.title}</div>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()

    const response = await client.query({
        query: GET_ALL_POST,
    })

    const posts = response?.data?.posts?.nodes

    return {
        props: {
            data,
            posts
        }
    }
}

export default SomePage
