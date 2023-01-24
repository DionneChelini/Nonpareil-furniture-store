import Head from 'next/head'
import Image from 'next/image'

import clsx from 'clsx'
import React from 'react'
import Container from '../layouts/container'

import { motion } from 'framer-motion'
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Link from 'next/link'
import logo from '@/images/logo.png'



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

type brandProps = {
  brand: string;
  imageSrc: string;
  imageAlt: string

}[]
type props = {
  brand: string;
  imageSrc: string;
  imageAlt: string
  availability: string

}[]


function Brands({ brands }: { brands: brandProps }) {

  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];
  console.log(brands)

  return (
    <div className="mt-6 sm:mt-20">
      <div className="py-12  text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Brand List</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
          Select by brand
        </p>
      </div>
      <div className="-my-4 flex-col justify-center  sm:flex sm:flex-row overflow-hidden py-4 sm:gap-8">
        {brands.map((item, index) => (
          <Link href={`http://localhost:3000/collection/luxury-watches-by-brand/${item.brand.toLowerCase()}`}
            key={index}
            className={clsx(
              'relative aspect-[9/10] w-60 mx-auto sm:mx-0 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[index % rotations.length]
            )}
          >
            <img
              src={`http://localhost:1337${item.imageSrc}`}
              alt={item.imageAlt}

              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover bg-white"
            />
            <div className='relative bottom-0 bg-black p-1 text-white text-center'> {item.brand}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
function Novelty({ novelties }: { novelties: props }) {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Patek Philippe Novelties</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
          Select by novelty
        </p>
      </div>
      <div className="-my-4 flex justify-center flex-wrap max-w-7xl mx-auto gap-5 overflow-hidden py-4 sm:gap-8">
        {novelties.map((item, i) => (
          <div >
            <Link href={`http://localhost:3000/collection/luxury-watches-by-brand/${item.brand.toLowerCase()}`}>
              <div

                className={clsx(
                  'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                  rotations[i % rotations.length]
                )}
              >
                <img
                  src={`http://localhost:1337${item.imageSrc}`}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="absolute inset-0 h-full w-full object-cover bg-white"
                />
                <div className='relative bottom-0 bg-black  p-1 text-white text-center'> {item.brand}</div>
                <div className='flex h-full relative right-2 w-full items-end   text-xs  pb-10 justify-end'>
                  <p className='bg-indigo-800 text-white p-1 text-center pb-2 rounded-2xl '> {item.availability}</p>

                </div>

              </div>
            </Link>
            <div className="mt-6">
              <Link
                href="/contact"
                className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Ask for Quote
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 w-40 mx-auto py-6 mt-24 px-4 sm:px-6">
        <button
          type="submit"
          className="w-full rounded-md border border-transparent bg-gray-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          View All
        </button>
      </div>
    </div>
  )
}

function MostPopular({ mostPopular }: { mostPopular: props }) {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Most Popular Models</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
          Select by popularity
        </p>
      </div>
      <div className="-my-4 flex justify-center flex-wrap max-w-7xl mx-auto gap-5 overflow-hidden py-4 sm:gap-8">
        {mostPopular.map((item, i) => (
          <div >
            <Link href={`http://localhost:3000/collection/luxury-watches-by-brand/${item.brand.toLowerCase()}`}>
              <div

                className={clsx(
                  'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                  rotations[i % rotations.length]
                )}
              >
                <img
                  src={`http://localhost:1337${item.imageSrc}`}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="absolute inset-0 h-full w-full object-cover bg-white"
                />
                <div className='relative bottom-0 bg-black  p-1 text-white text-center'> {item.brand}</div>
                <div className='flex h-full relative right-2 w-full items-end   text-xs  pb-10 justify-end'>
                  <p className='bg-indigo-800 text-white p-1 text-center pb-2 rounded-2xl '> {item.availability}</p>

                </div>

              </div>
            </Link>
            <div className="mt-6">
              <Link
                href="/contact"
                className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Ask for Quote
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 w-40 mx-auto py-6 mt-24 px-4 sm:px-6">
        <button
          type="submit"
          className="w-full rounded-md border border-transparent bg-gray-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          View All
        </button>
      </div>
    </div>
  )
}



function Hero(props: any) {
  return (
    <div className="relative">
      <Container>
        <div className='bg-white'>
          <motion.div
            className='relative bg-black'
            initial={{ height: "100vh" }}
            animate={{ height: "80vh" }}
            transition={{ duration: 6 }}
          >
            {/* Decorative image and overlay */}
            <div aria-hidden='true' className='absolute inset-0 overflow-hidden '>
              <motion.svg
                viewBox='0 0 1440 783'
                className='sm:mx-auto mx-0 w-96 sm:w-auto flex sm:h-screen'
                initial={{ height: "100vh" }}
                animate={{ height: "80vh" }}
                transition={{ delay: 2, duration: 3 }}
              >
                <defs>
                  <clipPath id='_clipPath_4aEgZJ6uh27W33RdUS7Zn1iefDgl2tXe'>
                    <rect width='1440' height='783' />
                  </clipPath>
                </defs>
                <g clipPath='url(#_clipPath_4aEgZJ6uh27W33RdUS7Zn1iefDgl2tXe)'>
                  <rect
                    x='0'
                    y='0'
                    width='1440'
                    height='783'
                    transform='matrix(1,0,0,1,0,0)'
                    fill='rgb(0,0,0)'
                  />
                  <radialGradient
                    id='_rgradient_1'
                    fx='0.5'
                    fy='0.5'
                    cx='0.5'
                    cy='0.5'
                    r='0.5'
                    gradientTransform='matrix(1438,0,0,276,2,1)'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop
                      offset='0%'
                      stopOpacity='1'
                      style={{ stopColor: "rgb(32,32,32)" }}
                    />
                    <stop
                      offset='16.956521739130434%'
                      stopOpacity='1'
                      style={{ stopColor: "rgb(30,30,30)" }}
                    />
                    <stop
                      offset='100%'
                      stopOpacity='1'
                      style={{ stopColor: "rgb(0,0,0)" }}
                    />
                  </radialGradient>
                  <motion.path
                    initial={{ opacity: 0, fill: "#000" }}
                    animate={{ opacity: 1, fill: "url(#_rgradient_1)" }}
                    transition={{ duration: 2 }}
                    d=' M 2 261 L 726 1 L 1440 277 L 2 261 Z '
                    vectorEffect='non-scaling-stroke'
                    strokeWidth='1'
                    stroke='rgb(0,0,0)'
                    strokeLinejoin='miter'
                    strokeLinecap='square'
                    strokeMiterlimit='3'
                  />
                  <linearGradient
                    id='_lgradient_1'
                    x1='-0.1518640328031305'
                    y1='0.6377485257977584'
                    x2='0.8946190149258222'
                    y2='0.30947115418180327'
                    gradientTransform='matrix(458.245,0,0,218.081,373,564.919)'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop
                      offset='0%'
                      stopOpacity='1'
                      style={{ stopColor: "rgb(106,106,106)" }}
                    />
                    <stop
                      offset='100%'
                      stopOpacity='1'
                      style={{ stopColor: "rgb(0,0,0)" }}
                    />
                  </linearGradient>
                  <linearGradient id='_lgradient_2' x1='0' y1='0.5' x2='1' y2='0.5'>
                    <stop
                      offset='0%'
                      stopOpacity='1'
                      style={{ stopColor: "rgb(255,255,255)" }}
                    />
                    <stop
                      offset='100%'
                      stopOpacity='1'
                      style={{ stopColor: "rgb(0,0,0)" }}
                    />
                  </linearGradient>
                  <motion.path
                    d=' M 703.768 632 C 724.502 623.56 810.637 572.523 824 566 C 843.182 556.636 717.833 610.065 653.188 651.393 C 588.542 692.721 875.038 736.376 587 758.589 Q 430.39 770.667 373 783 L 757.199 783 Q 835.503 779.43 831 758.589 C 826.497 737.748 695.256 697.932 682.905 680.05 C 670.555 662.168 664 656 694.58 640.017 C 697.721 639.622 683.5 640.25 703.768 632 Z '
                    vectorEffect='non-scaling-stroke'
                    strokeWidth='1'
                    stroke='url(#_lgradient_2)'
                    strokeLinejoin='miter'
                    strokeLinecap='square'
                    strokeMiterlimit='3'
                    initial={{
                      opacity: 0,
                      fill: "#000",
                      y: "-140px",
                      pathLength: 0,
                    }}
                    animate={{
                      fill: "url(#_lgradient_1)",
                      opacity: 0,
                      pathLength: 0,

                      x: "-13px",
                    }}
                  />
                </g>
              </motion.svg>
            </div>

            <div aria-hidden='true' className='absolute inset-0 ' />
            <motion.div
              className='relative max-w-3xl mx-auto py-22 px-6 flex flex-col items-center pt-24 text-center sm:pb-32 lg:px-0'
              initial={{ opacity: 0, y: "20px" }}
              animate={{ opacity: 1, y: "0px" }}
              transition={{ duration: 2, delay: 1 }}
            >
              <Image
                src={logo}
                className=' object-cover sm:object-center  h-60 sm:h-auto'
                alt=''
                priority
              />
              <p className='tracking-wide text-white  sm:text-xl font-thin'>
                The Ultimate Destination For Luxurious Watches{" "}
              </p>
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 1.02,
                }}
              >
                <Link
                  href='/collection:all'
                  style={{
                    border: "1px solid #332C2C",
                    color: "#EDD3A7",
                  }}
                  id='home_button'
                  className='border-transparent mt-14 flex py-4 px-8 text-base font-lg text-white shadow-xl'
                >
                  Discover Collection{" "}
                  <ArrowDownIcon className='h-6 w-6 pl-2' aria-hidden='true' />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <Brands {...props} />
        <Novelty {...props} />
        <MostPopular {...props} />
      </Container>



    </div>
  )
}

export default function Home(props: any) {
  console.log(props)
  return (
    <>
      <Head>
        <title>Nonpareil Collection - Luxury Watches</title>
        <meta name="description" content="The Ultimate Destination For Luxury Watches" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero {...props} />
        <LogoCloud />
      </main>


    </>
  )
}

export const getStaticProps = async () => {
  const fetchBrands = await fetch('http://localhost:1337/api/brand-lists?populate=image')
  let brands = await fetchBrands.json();
  brands = brands.data.map((item: any) => {
    return {
      brand: item.attributes.brand,
      imageAlt: item.attributes.imageAlt,
      imageSrc: item.attributes.image.data.attributes.formats.medium.url
    }
  });
  const fetchNovelities = await fetch('http://localhost:1337/api/novelties?populate=image')
  let novelties = await fetchNovelities.json();
  novelties = novelties.data.map((item: any) => {
    return {
      brand: item.attributes.brand,
      imageAlt: item.attributes.imageAlt,
      availability: item.attributes.availability,
      imageSrc: item.attributes.image.data.attributes.formats.medium.url
    }
  });
  const fetchMostPopular = await fetch('http://localhost:1337/api/most-populars?populate=image')
  let mostPopular = await fetchMostPopular.json();
  mostPopular = mostPopular.data.map((item: any) => {
    return {
      brand: item.attributes.brand,
      imageAlt: item.attributes.imageAlt,
      availability: item.attributes.availability,
      imageSrc: item.attributes.image.data.attributes.formats.large.url
    }
  });

  return {
    props: {
      brands,
      novelties,
      mostPopular

    },
    revalidate: 10
  }
}