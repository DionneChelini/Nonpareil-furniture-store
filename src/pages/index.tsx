import Head from 'next/head'
import Hero from '../components/hero'
import Image from 'next/image'

import { Inter } from '@next/font/google'
import LogoCloud from '../components/logocloud'
const inter = Inter({ subsets: ['latin'] })

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


export default function Home() {
  return (
    <>
      <Head>
        <title>Nonpareil Collection</title>
        <meta name="description" content="The Ultimate Destination For Luxury Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
     <Hero/>
     <LogoCloud/>
      </main>
   
      
    </>
  )
}
