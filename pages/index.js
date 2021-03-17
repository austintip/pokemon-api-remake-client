import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PokePage from './pokemon/PokePage';
import Router from 'next/router'
// import { Redirect, Router } from 'react-router-dom';

// import github from '../public/images/github.png'
// import linkedin from '../public/images/linkedin.png'

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const apiCall = () => {
    axios({
      url: 'https://humane-oarfish-32.hasura.app/v1/graphql',
      method: 'post',
      headers: {
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
    }).then(response => {
      console.log(response.data.data.pokemon_api_pokemon)
      setPokemon(response.data.data.pokemon_api_pokemon)
      // use static props (maybe??)
      // setRedirect(true)
    })
      // .then(pokestuff => {
      //   // console.log(pokestuff)
      //   // Router.push({
      //   //   pathName: '/pokemon/PokePage',
      //   //   props: {pokestuff}
      // })
      // })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="bodyContainer">
    <div className="container">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Welcome to the new and *soon-to-be* improved version of the Pokémon API!</p>
          <p>
            To query the API, click the button below and press Command Option J to open the console. Click on Array(151), then click [0-99] and [100-150] to view the data on the first 151 Pokemon!

        </p>
        </section>
        <div>
        <button onClick={apiCall}>CALL THE API HERE</button>
        </div>
      </Layout>
    </div>
      <div className="footer">
        {/* <a className="imageLinks" href="https://www.linkedin.com/in/austin-tipograph-522209137/" target="_blank" rel="noopener noreferrer"><img class="socialsImg" src='/css/linkedin.png' alt="Linkedin" /></a>
        <a className="imageLinks" href="https://github.com/austintip" target="_blank" rel="noopener noreferrer"><img class="socialsImg" src='../public/images/github.png' alt="GitHub" /></a>
      </div> */}
      <a className="imageLinks" href="https://www.linkedin.com/in/austin-tipograph-522209137/" target="_blank">
        <Image 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAb1BMVEX///8Ad7cAdLYAb7O5z+RTksQAdrj7/v9sqdL0+v0Ae7sAcbS41Ohqos1MlsaOuNkAbbTD2+sWgb7W5vHv9vucw+BBkseSvtzf7PVbn8zn8fd1rNOAsdUhhL+jx+DO4/CvzuSFtNZWm8oAZbA2jMQOsdCQAAAF5ElEQVR4nO2d6XLbIBCAY2iRJRQbHZZ8xUea93/G2pm4tSUWZCYFtuw3+SkS5RsQ5y4vLwSBnbypfgSnavLQHp6hXXVS8giQslu1oW1MJOsZZ7NIuLxKn4U2MoV1zUVoWfcIXq9DO7FTyWhq2g0mq9BWbDQqtCQdqgntxUwromqgN4SIu2PYyNCG9MhNaDMm4myiV6Jupu/RdQc32HtoNzA5i/LLdkWweCcMJQ9tB4aXoe2ALCPtEK7IZWg7IPNoP22Xj9s8tB2QeHuEqPuEnzFr+xnaDohdm/j8CQFabULy64IS41wGUIdUG1P1vlznWZavy32tvDdnlNqEWjws3lSd8lzjMGqT9WjFq6r9DvIQalOvmoezjdd5Pz5t6qx//OzTGzptfA89v/c4h8WmTRqG5wt/HSo2bYVhxSb3150i06ZOphInb80UlzbxZi7y5qu+4dLGD+YiB1/VDZU2wSw7ba2v+Skqbayzlek8daaotNmXopekbazNvvHhqy/Fpe1oK1ORtrE2+2a4r438/0zbkbRpGqn1ZBk1Ul1Pahnt+hvvotLGdrYyvrakUWkTta1MTbMEzZzU1id4OxGHS5utle58LVTi0iakcS6/9bbTjEub5aTPxtuqODJtM2UYupX+9q6waZuJLfT81uORBnTaWA1swrQ1absCbC+zQlvftoXP8zP4tM0E0yy7lXQG5Av4xJFaDKLsmoXnyA+U2mZMvZd/PnF5ufB+wA2nts+A2G7fHw79vgsRpotV2/XVmeRcsiCxMoi1hYS0OUHanCBtl3HgLV+GlFOXUFBqu/yfQzRrc1OeYlKJj/m5P5yqqjytzvMPoeSETgahNlnvliN29ePmi+Cb8UPL+cMMjKnitRzN1NaHjX1Ig08bh44833sTtX75PH//MwmT6vUIpELJy84ygEanjYHh/feLlBLcdPjapGFqD65AXWkWxrQt6LRxUEjzt7oZTnT1n9WNd9bcMcYIEWzaBANzDN3F1hvWzj9DydVqwt/PXuH1gf9Jm5ioTUxNt7MCvaWoDf7wDTlB3hLUpqyn5P4C1bf0tP16KhcFEJGUnLbTkzkV9Ieok9NWPZntb6sdvyWn7WlWumZK2qzoIpJImxXdoX3SZkdz1pC02dEcCCZtdtrxuiVpm8A4SRVpm8A4AR9pm8A43SNpm8JohpW0tnx9PK6Na+NfnIcLvelq2/ZvUnGuVPH6fChXqtqynZK35xl/syzBtcNlt0S1rR/3V4SyhJMXpO1Cw4a/2+JtOHJLUltbjGeZpoCHl5f9oE9IUps+h5Qp3/WBtAHRMrw3FRl0pSlqgzIhGZbLG9IGxdObIvG3gwqaoDYoO56p0HDglp62HDoxacpyliffSOFrGAwxvtkgC3d62nbg+SvTx20wTUhP2wd43I+f4FJvide2DD60Jg2n3j4S17aG89JIMKUvaTNkQWK6rNtfdIlrM9xnZNT2+DKkjbT9S23USF20Lai2kbZ7SNsnpM0J0uYEaXOCtDlB2pwgbU6QNidImxOkzQnS5gRpc4K0OUHanCBtTpA2J0ibE6TNCdLmBGlzgrQ5QdqcIG1OkDYnSJsTpM0J0uYEaXOCtDlB2pwgbU6QNidImxOkzQnS5oQ+p7gEQ9rbu5ziYL52be6/CdqQnxSfcTBt7t3FaobbhuEAP+MdxYP4NnTaRAFUt/w+dhHMF2C8ZpiDyUCwJ7S4vHFd5dmIvHy8MJLv2vFDWX4AAr6NpbLtHHuOo9n1vhJRjGDDrMKSjx8qmO2KHG2pYnzHCUJts5nmf592Y9C3XcCGUlt4ItY2TqQZD+w9tB2QeczavjmL4zey9HvB7VNIS763gBimQcGBB93BGadtjQbBTFnLAhNvnxBxj2CZCAVFTb67KASbSDsFCS+wxEArovy6CQHnkIqCOJtp3E30SqW5rzUwbOpVdiFZ18YLL70jeG29azIGst5+N603Lq/SP3lPVjDaVXe7UzosUnaryDuDR/Km+hGcqol4akAQE/kNdS+KgQBRLncAAAAASUVORK5CYII="
          alt="Linkedin Logo"
          width={75}
          height={60}
          />
      </a>
      <a className="imageLinks" href="https://github.com/austintip" target="_blank">
        <Image
          src="data:image/png;base64,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"
          alt="Github Logo"
          width={75}
          height={60} 
          />
      </a>
      </div>
      </div>
  )
}