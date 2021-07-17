import Image from 'next/image'

export default function Header (){
    return(
        <header>
            <Image
                src="/logo192.png"
                alt="Picture of the author"
                width={100}
                height={100}
            />
            <h2 style={{display:'inline-block'}}>Header</h2>
        </header>
    )
}