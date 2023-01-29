import React from 'react'

// export default class SomePage extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log('This outputs on the client-side AND server-side');
//     }
//
//     static async getInitialProps() {
//         console.log('HELLO');
//     }
//
//     componentDidMount() {
//         console.log('This outputs on the client-side');
//     }
//
//     render() {
//         return <div>test</div>
//     }
// }
import axios from 'axios'
import Link from "next/link";

const SomePage = ({ posts, mood }) => {
    console.log(mood)
    return (
        <div>
            <Link href="/somepage">Somepage</Link>
            <Link href="/test">Test</Link>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </div>
    )
}

SomePage.getInitialProps = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const {data} = response.data
    console.log('response.data: '+response.data)
    return {
        posts: response.data,
        mood: 'HAPPY'
    }
}

export default SomePage
