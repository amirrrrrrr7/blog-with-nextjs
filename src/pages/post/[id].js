// import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from "axios";

export default function Post ({post= {}}){
    // const {query} = useRouter()
    return(
        <div>
            <h3>{post.title}</h3>
            <p>
                {post.body}
            </p>
            <hr/>
            <Link href={"/post"}>
                <a>
                    return to list
                </a>
            </Link>
        </div>
    )
}

export async function getServerSideProps ({params}){
    const {data : post} = await axios(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    // const post = await response.json()
    // fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    //     .then(response => response.json())
    //     .then(result => console.log(result))

    return {
        props: {
            post
        }
    }
}