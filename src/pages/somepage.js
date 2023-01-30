import React from 'react'
import Link from "next/link";

const SomePage = ({ data }) => {
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

    return {
        props: {
            data
        }
    }
}

export default SomePage
