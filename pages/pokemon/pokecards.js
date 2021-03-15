import Link from 'next/link'



export default function pokecards() {
    return (
        <>
            <h1>Pokemon Cards!</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}