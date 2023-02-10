import React, {useState, useEffect} from 'react'
import {useQuery} from "@apollo/client";
import {GET_HOMEPAGE} from "../../graphql/queries";
import {BlockRenderer} from "@/components/BlockRenderer";
import {cleanAndTransformBlocks} from "@/utils/cleanAndTransformBlocks";
import Link from "next/link";

const SomePage = () => {
    const [blocks, setBlocks] = useState([]);
    const { loading, error, data } = useQuery(GET_HOMEPAGE);

    useEffect(() => {
        if (data) {
            const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
            setBlocks(blocks);
        }
    }, [data])

    if(loading) return <div> loading...</div> ;
    if (error) return <p>Error : {error.message}</p>;
    return (
        <>
            <Link href='/'>Home</Link>
            {blocks.map(({ id, name }) => (
                <div key={id}>
                    <h3>{name}</h3>
                </div>
            ))}
            <BlockRenderer blocks={blocks}/>
        </>
    )
}

export default SomePage
