import React, {useEffect} from 'react'
import client from '../../apollo-client'
import {gql} from "@apollo/client";

const GET_ALL_POST = `
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

const Pages = () => {
    useEffect(() => {
        client
            .query({
                query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
            })
            .then((result) => console.log(result));
    //     fetch('https://content.wpgraphql.com/graphql', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             query: `
    //     {
    //         generalSettings {
    //             url
    //         }
    //     }
    // `,
    //         }),
    //     })
    //         .then(res => res.json())
    //         .then(res => console.log(res.data))
    }, []);

    return (
        <div>
        </div>
    )
}

export default Pages
