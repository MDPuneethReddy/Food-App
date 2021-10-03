import * as React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// import styles from '../styles/Home.module.css'

import ViewCards from '../components/viewCards'

const Home: NextPage = () => {
  return (
    <div>
      This is a food App
      <ViewCards />
    </div>
  )
}

export default Home
