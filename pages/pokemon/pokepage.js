import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'


export default function pokepage() {
    return (
        <Layout>
            <Head>
                <title>Pokemon Page!</title>
            </Head>
            <h1>Pokemon Will Be Here</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}