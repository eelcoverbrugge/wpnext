import client from "../../apollo-client";
import gql from 'graphql-tag';
import { loadPosts } from "@/utils/loadPosts";

export const Page = ({props}) => {
    console.log("PROPS: " + props)
    return <>Page</>
}

export const getStaticProps = async (context) => {
    console.log("CONTEXT: ", context);
    const pages = await loadPosts();
    // const {data} = await client.query({
    //     query: gql`
    //       query NewQuery {
    //         nodeByUri(uri: "/") {
    //           ... on Page {
    //             id
    //             title
    //             blocksJSON
    //           }
    //         }
    //       }
    //     `
    // });

    // const blocks = cleanAndTransformBlock(data.nodeByUri.blocksJSON);

    return {
        props: {
            pages,
        }
    }
};

export const getStaticPaths = async () => {
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

    return {
        paths: data.pages.nodes.map(page => ({
            params: {
                slug: page.uri.substring(1, page.uri.length - 1).split("/"),
            },
        })),
        fallback: false,
    };
};
