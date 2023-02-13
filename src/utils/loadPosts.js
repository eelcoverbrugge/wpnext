import client from "../../apollo-client";
import gql from "graphql-tag";

export async function loadPosts() {
    const {data} = await client.query({
        query: gql`
            query AllPagesQuery {
                pages {
                    nodes {
                        uri
                    }
                }
            }
        `,
    });

    return data
}