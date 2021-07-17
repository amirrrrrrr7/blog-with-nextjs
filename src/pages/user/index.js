import axios from "axios";
import Link from "next/link";
import Head from "next/head";

export default function Users ({users= []}){
    return(
        <>
            <Head>
                <title>users list</title>
            </Head>
            <h2>Users List</h2>
            <ol>
                {users.map(({name, id}) =>
                <Link href={`/user/${id}`}>
                    <a>
                        <li>
                            {name}
                        </li>
                    </a>
                </Link>)}
            </ol>
        </>
    )
}

export async function getStaticProps (){
    const {data : users} = await axios('https://jsonplaceholder.typicode.com/users')

    users.length = 5

    return{
        props: {
            users
        },
        revalidate: 5
    }
}