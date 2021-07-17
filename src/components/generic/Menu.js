import Link from 'next/link';

export default function Menu (){
    return(
        <menu>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>about</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/post">
                        <a>posts</a>
                    </Link>
                </li>
                <li>
                    <Link href="/user">
                        <a>users</a>
                    </Link>
                </li>
            </ul>
        </menu>
    )
}