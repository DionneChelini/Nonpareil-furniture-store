/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import {
  Bars3Icon,

  DevicePhoneMobileIcon,
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import image1 from '@/images/photos/m226659-0002.webp'
import image2 from '@/images/photos/AP_Royal.jpg'
import image3 from '@/images/photos/Geneva.jpg'
import image4 from '@/images/photos/image-3.jpg'
import image5 from '@/images/photos/chanel.jpg'
import image6 from '@/images/photos/panarei.jpg'
import image7 from '@/images/photos/vanceet.jpg'
import Image from 'next/image'
import Link from 'next/link'




const navigation = {
  categories: [
    {
      name: 'Shop',
      featured: [
        {
          name: 'ROLEX',
          href: '/collection/brand/rolex/1',
          imageSrc: image1,
          imageAlt: 'Nonpareil Collection - Rolex Luxury Watches For Sale.',
          selection: [
            { href: "/collection/brand/rolex/1/subcategory/daytona", subcategory: "Daytona" },
            { href: "/collection/brand/rolex/1/subcategory/submariner", subcategory: "Submariner" },
            { href: "/collection/brand/rolex/1/subcategory/GMT-master", subcategory: "GMT Master" },
            { href: "/collection/brand/rolex/1/subcategory/datejust", subcategory: "Datejust" },
            { href: "/collection/brand/rolex/1/subcategory/daydate", subcategory: "Daydate" },
            { href: "/collection/brand/rolex/1/subcategory/oyster-perpectual", subcategory: "Oyster Perpectual" },
            { href: "/collection/brand/rolex/1/subcategory/sea-dweller", subcategory: "Sea Dweller" },
            { href: "/collection/brand/rolex/1/subcategory/sky-dweller", subcategory: "Sky Dweller" },
            { href: "/collection/brand/rolex/1/subcategory/yacht-master", subcategory: "Yacht Master" },
            { href: "/collection/brand/rolex/1/subcategory/others", subcategory: "Others" },

          ]
        },
        {
          name: 'AUDEMARS PIGUET',
          href: '/collection/brand/audemars-piguet/1',
          imageSrc: image2,
          imageAlt: 'Nonpareil Collection- Audemars Piguet Luxury Watches for Sale',
          selection: [
            { href: "/collection/brand/audemars-piguet/1/subcategory/royal-oak", subcategory: "Royal Oak" },
            { href: "/collection/brand/audemars-piguet/1/subcategory/royal-oak-offshore", subcategory: "Royal Oak Offshore" },
            { href: "/collection/brand/audemars-piguet/1/subcategory/royal-concept", subcategory: "Royal Oak Concept" },
            { href: "/collection/brand/audemars-piguet/1/subcategory/code-11.59", subcategory: "Code 11.59" },
            { href: "/collection/brand/audemars-piguet/1/subcategory/others", subcategory: "Others" },
          ]
        },
        {
          name: 'PATEK PHILIPPE',
          href: '/collection/brand/patek-philippe/1',
          imageSrc: image3,
          imageAlt: 'Nonpareil Collection- Patek Philippe Luxury Watches for Sale',
          selection: [
            { href: "/collection/brand/patek-philippe/1/subcategory/grand-complications", subcategory: "Grand Complications" },
            { href: "/collection/brand/patek-philippe/1/subcategory/nautilus", subcategory: "Nautilus" },
            { href: "/collection/brand/patek-philippe/1/subcategory/aquanaut", subcategory: "Aquanaut" },
            { href: "/collection/brand/patek-philippe/1/subcategory/complications", subcategory: "Complications" },
            { href: "/collection/brand/patek-philippe/1/subcategory/calatrava", subcategory: "Calatrava" },
            { href: "/collection/brand/patek-philippe/1/subcategory/others", subcategory: "Others" },
          ]
        },
        {
          name: 'RICHARD MILLE',
          href: '/collection/brand/richard-mille/1',
          imageSrc: image4,
          imageAlt: 'Nonpareil Collection- Richard Mille Luxury Watches for Sale, Tourbillon Watches Richard Mille',
          selection: [
            { href: "/collection/brand/richard-mille/1/subcategory/tourbillon", subcategory: "Tourbillon" },
            { href: "/collection/brand/richard-mille/1/subcategory/men", subcategory: "Men" },
            { href: "/collection/brand/richard-mille/1/subcategory/ladies", subcategory: "Ladies" },


          ]
        },
      ],
    },
    {
      name: 'Other Brands',
      featured: [
        {
          name: 'A - H',
          href: '#',
          imageSrc: image5,
          imageAlt: 'Nonpareil Collection - Cartier Watch, Gucci Watch, Hermes Watch, Franck Muller Watch, Hublot Watch, Bvlgari Watch Collection',
          selection: [
            { href: "/collection/brand/blancpain/1", subcategory: "Blancpain" },
            { href: "/collection/brand/bvlgari/1", subcategory: "Bvlgari" },
            { href: "/collection/brand/cartier/1", subcategory: "Cartier" },
            { href: "/collection/brand/dietrich/1", subcategory: "Dietrich" },
            { href: "/collection/brand/franck-muller/1", subcategory: "Franck Muller" },
            { href: "/collection/brand/girard-perregaux/1", subcategory: "Girard Perregaux" },
            { href: "/collection/brand/glashutte/1", subcategory: "Glashutte" },
            { href: "/collection/brand/gucci/1", subcategory: "Gucci" },
            { href: "/collection/brand/hermes/1", subcategory: "Hermes" },
            { href: "/collection/brand/hublot/1", subcategory: "Hublot" },
          ]
        },
        {
          name: 'I - Q',
          href: '#',
          imageSrc: image6,
          imageAlt: 'Nonpareil Collection - IWC Watch, Montblanc Watch, Omega Watch, Panerai Watch, Piaget Watches For Sale Through Our Online Store',
          selection: [
            { href: "/collection/brand/iwc/1", subcategory: "IWC" },
            { href: "//collection/brand/jaeger-lecoultre/1", subcategory: "Jaeger-LeCoultre" },
            { href: "/collection/brand/longines/1", subcategory: "Longines" },
            { href: "/collection/brand/montblanc/1", subcategory: "Montblanc" },
            { href: "/collection/brand/omega/1", subcategory: "Omega" },
            { href: "/collection/brand/panerai/1", subcategory: "Panerai" },
            { href: "/collection/brand/piaget/1", subcategory: "Piaget" },

          ]
        },
        {
          name: 'R - Z',
          href: '#',
          imageSrc: image7,
          imageAlt: 'Nonpareil Collection - Roger Dubuis Watch, Tagheuer Watch, Tudor Watch',
          selection: [
            { href: "/collection/brand/roger-dubuis/1", subcategory: "Roger Dubuis" },
            { href: "/collection/brand/tagheuer/1", subcategory: "Tagheuer" },
            { href: "/collection/brand/tudor/1", subcategory: "Tudor" },
            { href: "/collection/brand/vacheron-constantin/1", subcategory: "Vacheron Constantin" },
            { href: "/collection/brand/vancleef/1", subcategory: "Vancleef" },
            { href: "/collection/brand/zenith/1", subcategory: "Zenith" },
          ]
        },
      ],
    },


  ],
  pages: [
    { name: 'Sell / Trade', href: '/sell' },
    { name: 'Consign', href: '/consign' },

  ],

}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter()

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative  z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col bg-white overflow-y-auto  pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment} >
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-12 px-4 py-6">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10" >
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative">
                              <Link href={item.href} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                <Image src={item.imageSrc} alt={item.imageAlt} width={400} height={400} className="object-cover object-center" />
                              </Link>

                              <Link href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </Link>

                              {category.name === 'Main Brands' && item.selection.map((j, i) => <Link href={j.href} key={i} aria-hidden="true" className="mt-1 flex-col flex text-sm text-gray-500 z-10">{j.subcategory}</Link>)}

                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>



                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>



              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative z-50">
        <nav aria-label="Top">
          {/* Top navigation */}


          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex-1 text-sm lg:flex lg:items-center  'text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium">
                    {router.asPath !== '/' && <Link href="/">

                      <div className='flex justify-center items-center'>
                        <ArrowLeftIcon className="h-3 w-3 mr-2" aria-hidden="true" />
                        Back Home
                      </div>
                    </Link>
                    }
                  </div>


                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="inset-x-0 bottom-0 px-4">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? 'border-indigo-600 text-indigo-600'
                                        : 'border-transparent text-gray-700 hover:text-gray-800',
                                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                    )}
                                  >
                                    {category.name}
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                    <div className="relative bg-white">
                                      <div className="mx-auto max-w-7xl px-8">
                                        <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                          {category.featured.map((item, i) => (

                                            <div key={item.name} className="group relative">

                                              <Link href={item.href} className="mt-4 block font-medium text-gray-900">
                                                <Popover.Button className="aspect-w-1 mb-2 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                  <Image
                                                    width={300}
                                                    height={300}
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="object-cover object-center"
                                                  />
                                                </Popover.Button>
                                              </Link>

                                              <span className="inset-0 relative z-10" aria-hidden="true" />
                                              <Link href={item.href} className="font-semibold text-gray-900"> <Popover.Button> {item.name}</Popover.Button></Link>

                                              {item.selection.map((j, index) => <Link href={j.href} key={index} aria-hidden="true" className="flex-col z-10 flex mt-1"><Popover.Button className="flex">{j.subcategory} </Popover.Button></Link>)}

                                            </div>

                                          ))}
                                        </div>
                                      </div>
                                    </div>


                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}




                        {navigation.pages.map((page) => (
                          <Link
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>


                  </div>


                  <div className="flex flex-1 items-center justify-end">
                    <Link href="/faq" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                      FAQ
                    </Link>

                    <div className="flex items-center lg:ml-8">
                      {/* Help */}
                      <Link href="/who-are-we" className="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                        <span className="sr-only">About Us</span>
                        <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                      </Link>
                      <Link href="/who-are-we" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                        About Us
                      </Link>

                      {/* Cart */}
                      <div className="ml-4 flow-root lg:ml-8 hidden sm:flex">


                        <div className="group -m-2 flex justify-center items-center p-2">
                          <button
                            type="button"
                            className="inline-flex text-xs justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 sm:mr-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            <DevicePhoneMobileIcon className="h-4 w-4 mr-2" aria-hidden="true" />

                            WhatsApp +393278659243
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav >
      </header >
    </div >
  )
}
Navbar.displayName = "Navbar"

export default Navbar;