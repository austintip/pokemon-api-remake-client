import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'


export default function PokePage(props) {
    return (
        <Layout>
            <Head>
                <title>Pokemon Page!</title>
            </Head>
            {/* <h2>{props.pokemon}</h2> */}
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}