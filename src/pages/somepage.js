import React, { useEffect, useState } from 'react'
import Link from "next/link";
import {gql, useQuery} from "@apollo/client";
import client from '../../apollo-client';
import {GET_ALL_POST} from "../../graphql/queries";

const SomePage = ({ pages }) => {
    console.log(pages)

    const [posts, setPosts] = useState([]);
    const { loading, error, data } = useQuery(GET_ALL_POST);

    useEffect(() => {
        const fetchUsers = async () => {
            console.log(data?.posts?.nodes)
            setPosts(data?.posts?.nodes)
        };
        fetchUsers();
    }, [data]);

    if(loading) return  <div> loading...</div> ;
    return (
        <div>
            <ul>
                <li>
                    <Link href="/somepage">Somepage</Link>
                </li>
            </ul>
            <ul>
                {/*{data?.map((post) => (*/}
                {/*    <li key={post.id}>{post.name}</li>*/}
                {/*))}*/}
            </ul>
        </div>
    )
}

export const getStaticProps = async () => {
    // const {pages} = await client.query({
    //     query: gql`
    //     {
    //       pages {
    //         nodes {
    //           title
    //         }
    //       }
    //     }
    //     `
    // })

    return {
        props: {
            pages: 'pages'
        }
    }
}

export default SomePage
