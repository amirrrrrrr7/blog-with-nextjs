// import {useState, useEffect}from 'react'
import Link from 'next/link'
import axios from "axios";

export default function Posts ({posts= []}){

    // const [posts, setPosts] = useState([])
    //
    // useEffect(() =>{
    //     axios('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => setPosts(response.data))
    // },[])
    return(
        <div>
            <h2>posts</h2>
            <ol>
                {posts.map(({id, title}) =>(
                    <Link key={id} href={`/post/${id}`}>
                        <a>
                            <li>
                                {title}
                            </li>
                        </a>
                    </Link>
                ))}
            </ol>
        </div>
    )
}

export async function getServerSideProps() {

    const {data : posts} = await axios('https://jsonplaceholder.typicode.com/posts')
    return{
        props: {
            posts
        }
    }
}