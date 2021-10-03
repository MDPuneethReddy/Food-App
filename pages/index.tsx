import * as React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// import styles from '../styles/Home.module.css'

import ViewCards from '../components/ViewCards'

const Home: NextPage = () => {
  return (
    <div>
      This is a food App
      <div style={{height:"100%", width:"50%",textAlign:"center"}}><ViewCards /></div>
    </div>
  )
}

export default Home
