import Head from 'next/head'

export default function Home (){
    return (
        <>
            <Head>
                <title>home page</title>
            </Head>
            <h1>{process.env.myName}</h1>
            <h2>Home</h2>
        </>
    )
}