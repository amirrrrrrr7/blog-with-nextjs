
export default function Gallery ({params}){
    console.log(params);

    return(
        <div>
            optional catch all routes {params?.slug?.join('/')}
        </div>
    )
}


export async function getServerSideProps ({params}){
    console.log(params);
    return {
        props: {
            params
        }
    }
}