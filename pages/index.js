import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import axios from 'axios'

export default function Home() {

  const apiCall = (req, res) => {
    axios({
      url: 'https://humane-oarfish-32.hasura.app/v1/graphql',
      method: 'post',
      headers: {
        // Authorization: `x-hasura-admin-secret 123123123`
        'x-hasura-admin-secret': '123123123'
      },
      data: {
        query: `{
          pokemon_api_pokemon {
            pokedex_number
            name
            first_type
            second_type
            height
            weight_lbs
            first_ability
            second_ability
            hidden_ability
          }}`
      }
    }).then(pokemon => {
      console.log(pokemon.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to the new and *soon-to-be* improved version of the Pokemon API!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <button onClick={apiCall}>CALL THE API HERE</button>
    </Layout>
  )
}