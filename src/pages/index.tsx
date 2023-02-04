import Head from 'next/head'
import Image from 'next/image'

import React from 'react'
import Container from '../components/Container'

import { motion } from 'framer-motion'
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Link from 'next/link'
import logo from '@/images/logo.png'
import { v4 as uuid } from 'uuid'
import sell from '@/images/photos/DSC2511-900x900.jpg'
import buy from '@/images/photos/DSC0229-900x900.jpg'
import trade from '@/images/photos/DSC9883-900x900.jpg'
import consign from '@/images/photos/DSC1844-2-900x900.jpg'

import image2 from '@/images/photos/RM5206TourbillonBlackMaskELITAFinal42_portrait_large.jpg'
import richardMille from '@/images/photos/rm07back_landscape_large.jpg'
import audemarsPiguet from '@/images/photos/AP_Royal.jpg'
import rolex from '@/images/photos/Rolex_Submariner.jpg'
import patekPhilippe from '@/images/photos/PatekPhilippe5531RLakeGenevaELITA__carousel_large.jpg'
import other from '@/images/photos/image_5_38906541ed.webp'



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




const callouts = [
  {
    name: 'Buy',
    imageSrc: buy,
    imageAlt: 'Nonpareil Collection ',
    href: '/collection/luxury-watches/1',
  },
  {
    name: 'Sell',

    imageSrc: sell,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/sell',
  },
  {
    name: 'Trade',

    imageSrc: trade,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/trade',
  },
  {
    name: 'Consign',

    imageSrc: consign,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/consign',
  },
]


function WithImageBackgrounds() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">For Those Looking To... </h2>

          <div className="mt-6 space-y-12  lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
            {callouts.map((callout) => (
              <Link href={callout.href} key={callout.name} className="group relative">
                <div className="relative mb-8 w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className='bg-gray-50 opacity-90 absolute bottom-32 w-full py-2'>

                  <h2 className="text-6xl font-sixCaps tracking-widest text-center  text-black">{callout.name}</h2>

                </div>
              </Link>
            ))}
          </div>
          <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl flex justify-end">We Do It All </h2>


        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Our Knowledgeable Staff Are Here To Help You Find The </span>
            <span className="block">Perfect Timepiece To Fit Your Lifestyle.</span>
          </h2>
          <div className="mt-8 flow-root justify-center lg:ml-8 hidden sm:flex">
            <Link href="/contact" className="group -m-2 flex items-center p-2">
              <button
                type="button"
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-800 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >

                Contact Us
              </button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const brands = [
  { image: richardMille, brand: 'Richard Mille', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto?', href: "/collection/brand/richard-mille/1" },
  { image: patekPhilippe, brand: 'Patek Philippe', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto?', href: "/collection/brand/patek-philippe/1" },
  { image: audemarsPiguet, brand: 'Audemars Piguet', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto?', href: "/collection/brand/audemars-piguet/1" },
  { image: rolex, brand: 'Rolex', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto?', href: "/collection/brand/rolex/1" },

  { image: other, brand: 'Other', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto?', href: "/collection/brand/other/1" },
]

function WithBackgroundImageAndDetailOverlay() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl pt-24  mx-auto px-4">

        <h2 className="sm:text-4xl text-2xl py-8 font-extrabold text-gray-900">Browse by Category</h2>
        <div className="max-w-2xl mx-auto pb-16 grid grid-cols-1  sm:grid-cols-2 gap-8  sm:pb-24 lg:max-w-7xl">
          {brands.map((item) => {
            return <div key={uuid()} className="relative rounded-lg overflow-hidden lg:h-96">
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div aria-hidden="true" className="relative w-full h-96 lg:hidden" />
              <div aria-hidden="true" className="relative w-full h-32 lg:hidden" />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-6 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start">
                <div>
                  <h2 className="text-xl font-bold text-white">{item.brand}</h2>
                  <p className="mt-1 text-sm text-gray-300">
                    {item.description}
                  </p>
                </div>
                <Link
                  href={item.href}
                  className="mt-6 flex-shrink-0 flex bg-white bg-opacity-0 py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
                >
                  View {item.brand} Collection
                </Link>
              </div>
            </div>
          })}

        </div>
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2.5 }}
                className=" opacity-30  h-full w-full" >

                <Image alt="some image" src={image2} className=" object-cover object-right h-full w-full" />
              </motion.div>
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
              <p className='tracking-wide  text-white  sm:text-xl font-bold'>
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
                  href='/collection/luxury-watches/1'
                  style={{
                    border: "1px solid #332C2C",
                    color: "#EDD3A7",
                  }}
                  id='home_button'
                  className='border-transparent bg-black mt-10 flex py-4 px-8 text-base font-lg text-white shadow-xl'
                >
                  Discover Collection{" "}
                  <ArrowDownIcon className='h-6 w-6 pl-2' aria-hidden='true' />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <WithImageBackgrounds />
        <WithBackgroundImageAndDetailOverlay />


      </Container>



    </div>
  )
}



export default function Home(props: any) {
  console.log(props)
  return (
    <>
      <Head>
        <title>Nonpareil Collection - Luxury Timepieces</title>
        <meta name="description" content="The Ultimate Destination For Luxury Timepieces" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero {...props} />

      </main>


    </>
  )
}


