// import NextNprogress from 'nextjs-progressbar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from "components/generic/Header";
import Sidebar from "gener/Sidebar";
import Footer from "cmp/generic/Footer";
import  random from 'lodash/random';
import 'styles/global.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

    const router = useRouter()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        router.events.on('routeChangeStart', () => setLoading(true))
        router.events.on('routeChangeComplete', () => setLoading(false))

        return () => {
            router.events.off('routeChangeStart', () => setLoading(true))
            router.events.off('routeChangeComplete', () => setLoading(false))
        }
    }, [])

    return (
        <div>
            {loading && 'loading...'}

            <hr />
            {random(0, 20)}
            <Header />
            {/*<NextNprogress*/}
            {/*    color="#29D"*/}
            {/*    startPosition={0.3}*/}
            {/*    stopDelayMs={200}*/}
            {/*    height="3"*/}
            {/*/>*/}
            <section style={{display: 'flex'}}>
                <Sidebar />
                <article>
                    <Component {...pageProps} />
                </article>
            </section>
            <Footer />
        </div>
    )

}
