import React from 'react'
import {useQuery} from "@apollo/client";
import {GET_ALL_POST} from "../../graphql/queries";

const SomePage = () => {
    const { loading, error, data } = useQuery(GET_ALL_POST);

    if(loading) return <div> loading...</div> ;
    if (error) return <p>Error : {error.message}</p>;
    return data.posts.nodes.map(({ id, title }) => (
        <div key={id}>
            <h3>{title}</h3>
        </div>
    ));
}

export default SomePage
