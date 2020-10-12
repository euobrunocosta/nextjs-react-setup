import React from 'react'
import Head from 'next/head'

import MegaphoneIcon from '../assets/megaphone.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <MegaphoneIcon />
        <h1>Hello World!</h1>
      </main>
    </Container>
  )
}

export default Home
