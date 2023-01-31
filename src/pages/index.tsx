import Head from 'next/head'
import Image from 'next/image'

import React from 'react'
import Container from '../components/Container'

import { motion } from 'framer-motion'
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Link from 'next/link'
import logo from '@/images/logo.png'

import image1 from '@/images/photos/RM_1601_REGLISSE_FRONT_11_carousel_large.jpg'
import image2 from '@/images/photos/portrait.jpg'
import image3 from '@/images/photos/RM_1601_REGLISSE_BACKMACRO_landscape_large.jpg'

import image4 from '@/images/photos/RM3701_CERISE_PHOTOSTACKFINAL21_portrait_large.jpg'
import image5 from '@/images/photos/candies20210901210949utc1_portrait_large.jpg'
import image6 from '@/images/photos/RM3701_CERISE3_landscape_large.jpg'
import image7 from '@/images/photos/RM5206TourbillonBlackMaskELITAWebsite22_1_portrait_large.jpg'
import image8 from '@/images/photos/RM5206TourbillonBlackMaskELITAFinal42_portrait_large.jpg'
import image9 from '@/images/photos/RM5206TourbillonSkullELITAFinal_1_carousel_large.jpg'

import image10 from '@/images/photos/5711R_PATEK_PHILIPPE_NAUTILUS_ROSEGOLD_FRONTRecovered2_carousel_large.jpg'
import image11 from '@/images/photos/5711R_PATEK_PHILIPPE_NAUTILUS_ROSEGOLD_SIDE21_carousel_large.jpg'
import image12 from '@/images/photos/5711R_PATEK_PHILIPPE_NAUTILUS_ROSEGOLD_BACKMACRONEW21_carousel_large.jpg'
import image13 from '@/images/photos/04_12_portrait_large.jpg'
import image14 from '@/images/photos/e1a61bdb-16f5-48e8-b4d5-633f8652f24c.jpg'
import image15 from '@/images/photos/05_6_portrait_large.jpg'

import image16 from '@/images/photos/Rolex_Day_Date_40_228345RBR_0002_Everose_Gold_Diamond_Pave_4_carousel_large.jpg'
import image17 from '@/images/photos/Rolex_Day_Date_40_228345RBR_0002_Everose_Gold_Diamond_Pave_1_carousel_large.jpg'
import image18 from '@/images/photos/Rolex_Day_Date_40_228345RBR_0002_Everose_Gold_Diamond_Pave_2_carousel_large.jpg'

import image19 from '@/images/photos/RolexDatejust_36126234_0049_Blue_Fluted_Motif_Dial_3_carousel_large.jpg'
import image20 from '@/images/photos/RolexDatejust_36126234_0049_Blue_Fluted_Motif_Dial_4_carousel_large.jpg'
import image21 from '@/images/photos/RolexDatejust_36126234_0049_Blue_Fluted_Motif_Dial_1_carousel_large.jpg'

import image22 from '@/images/photos/Rolex_Submariner_Date_116618LB_YG_3_carousel_large.jpg'
import image23 from '@/images/photos/Rolex_Submariner_Date_116618LB_YG_1_carousel_large.jpg'
import image24 from '@/images/photos/Rolex_Submariner_Date_116618LB_YG_2_carousel_large.jpg'

import image25 from '@/images/photos/Rolex_Datejust_Pearlmaster_39_86285_0004_3_carousel_large.jpg'
import image26 from '@/images/photos/Rolex_Datejust_Pearlmaster_39_86285_0004_1_carousel_large.jpg'
import image27 from '@/images/photos/Rolex_Datejust_Pearlmaster_39_86285_0004_2_carousel_large.jpg'




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


const posts = [
  {
    title: 'Investment Opportunites in the Luxury Watch Market',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl: image2,
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl: image2,
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl: image2,
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

function Brands({ brands }: { brands: brandProps }) {


  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 sm:max-w-7xl xl:mx-auto xl:px-8">
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Brand</h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Browse all brands<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
              <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                {brands.map((item, i) => (
                  <Link href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}collection/brand/${item.brand.toLowerCase()}/1`}
                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                    key={i}
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img src={`${process.env.NEXT_PUBLIC_URL_STRAPI + item.imageSrc}`} alt="" className="w-full h-full object-center object-cover" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 font-sixCaps opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{item.brand}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all brands<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
function Gallery() {


  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Gallery</h2>

        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src={image1}
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover h-full group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image2}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Accessories
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image3}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Second set of photos */}
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src={image4}
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover h-full group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image5}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Accessories
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image6}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Third Galery Section */}
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src={image7}
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover h-full group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image8}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Accessories
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image9}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* forth Galery Section */}
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src={image10}
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover h-full group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image11}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Accessories
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image12}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Fifth Galery Section */}
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src={image13}
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover h-full group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image14}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Accessories
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image15}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Sixth */}
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src={image16}
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover h-full group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image17}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Accessories
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image18}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Seventh */}
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src={image19}
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover h-full group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image20}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Accessories
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image21}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Eighth */}
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src={image22}
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover h-full group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image23}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Accessories
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image24}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Ninth */}
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src={image25}
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover h-full group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image26}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Accessories
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 relative aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              src={image27}
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-center h-full object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <div>
                    <span className="inset-0 absolute" />
                    Workspace
                  </div>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all categories<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
      <div className="relative py-16 bg-white">
        <div className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block" aria-hidden="true" />
        <div className="max-w-7xl mx-auto bg-gray-600 lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
              <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
              <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <Image
                    className="object-cover hidden sm:block bg-black pt-10 pb-14 object-center rounded-3xl shadow-2xl"
                    src={logo}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-gray-800 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                <svg
                  className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-700" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>
                <svg
                  className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-500" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>
              </div>
              <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                <h2 className="text-3xl font-extrabold text-white" id="join-heading">
                  See Something You Like? Contact Us Directly
                </h2>
                <p className="text-lg text-white">
                  All customer enquiries are handled directly by Daniele Marchei and Dionne Chelini, the founders of Nonpareil Collection. This is to assure clients are handled with care and professionality.
                </p>
                <a
                  className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-gray-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
                  href="#"
                >
                  Telephone Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BlogSection() {


  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div>
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Read Our Blog</h2>

          </div>
        </div>
        <div className="mt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <Image className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                  href='/collection/luxury-watches/1'
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
        <Gallery />
        <BlogSection />
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

export const getStaticProps = async () => {
  const fetchBrands = await fetch(`${process.env.NEXT_PUBLIC_URL_STRAPI}/api/brand-lists?populate=image`)
  let brands = await fetchBrands.json();
  brands = brands.data.map((item: any) => {
    return {
      brand: item.attributes.brand,
      imageAlt: item.attributes.imageAlt,
      imageSrc: item.attributes.image.data.attributes.formats.medium.url
    }
  });

  return {
    props: {
      brands,


    },

  }
}