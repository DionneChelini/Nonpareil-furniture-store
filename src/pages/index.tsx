import Head from 'next/head'
import React from 'react'
//components
import Container from '../components/Container'
import ServicePreviewSection from '@/components/ServicePreviewSection'
import HeroSection from '@/components/HeroSection'
import CategoryPreviewSection from '@/components/CategoryPreviewSection'
import BlogSection from '@/components/BlogSection'
import image1 from '@/images/home/preview.jpg'



export default function Home() {


  return (
    <>
      <Head>
        <title>Nonpareil Collection - The Ultimate Destination For Luxurious Watches</title>
        <meta name="description" content="Rolex, Audemars Piguet, Richard Mille, Patek Philippe, Franck Muller, Luxurious Pre-owned Watches" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="https://www.nonpareilcollection.com/preview.jpg" />

      </Head>
      <main>
        <Container>
          <HeroSection />
          <ServicePreviewSection />
          <CategoryPreviewSection />
          <BlogSection />
        </Container>
      </main>

    </>
  )
}


