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
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import image1 from '@/images/photos/Rolex_Submariner.jpg'
import image2 from '@/images/photos/AP_Royal.jpg'
import image3 from '@/images/photos/Geneva.jpg'
import image4 from '@/images/photos/image-3.jpg'
import image5 from '@/images/photos/chanel.jpg'
import image6 from '@/images/photos/panarei.jpg'
import image7 from '@/images/photos/vanceet.jpg'
import logo from '@/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

interface navigation {
  categories: [{ name: string, featured: [{ name: string, href: string, imageSrc?: string, imageAlt?: string, selection?: [{ href: string, subcategory: string }] }] }]
}



const navigation = {
  categories: [
    {
      name: 'Main Brands',
      featured: [
        {
          name: 'ROLEX',
          href: '#',
          imageSrc: image1,
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          selection: [
            { href: "#", subcategory: "Daytona" },
            { href: "#", subcategory: "Submariner" },
            { href: "#", subcategory: "GMT Master" },
            { href: "#", subcategory: "Datejust" },
            { href: "#", subcategory: "Daydate" },
            { href: "#", subcategory: "Oyster Perpectual" },
            { href: "#", subcategory: "Sea Dweller" },
            { href: "#", subcategory: "Sky Dweller" },
            { href: "#", subcategory: "Yacht Master" },
            { href: "#", subcategory: "Others" },

          ]
        },
        {
          name: 'AUDEMARS PIGUET',
          href: '#',
          imageSrc: image2,
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          selection: [
            { href: "#", subcategory: "Royal Oak" },
            { href: "#", subcategory: "Royal Oak Offshore" },
            { href: "#", subcategory: "Royal Oak Concept" },
            { href: "#", subcategory: "Code 11.59" },
            { href: "#", subcategory: "Others" },
          ]
        },
        {
          name: 'PATEK PHILIPPE',
          href: '#',
          imageSrc: image3,
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
          selection: [
            { href: "#", subcategory: "Grand Complications" },
            { href: "#", subcategory: "Nautilus" },
            { href: "#", subcategory: "Aquanaut" },
            { href: "#", subcategory: "Complications" },
            { href: "#", subcategory: "Calatrava" },
            { href: "#", subcategory: "Others" },
          ]
        },
        {
          name: 'RICHARD MILLE',
          href: '#',
          imageSrc: image4,
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
          selection: [
            { href: "#", subcategory: "Tourbillon" },
            { href: "#", subcategory: "Men" },
            { href: "#", subcategory: "Ladies" },


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
          imageAlt: '',
          selection: [
            { href: "#", subcategory: "Blancpain" },
            { href: "#", subcategory: "Bvlgari" },
            { href: "#", subcategory: "Cartier" },
            { href: "#", subcategory: "Chanel" },
            { href: "#", subcategory: "Chopard" },
            { href: "#", subcategory: "Dietrich" },
            { href: "#", subcategory: "Franck Muller" },
            { href: "#", subcategory: "Girard Perregaux" },
            { href: "#", subcategory: "Glashutte" },
            { href: "#", subcategory: "Gucci" },
            { href: "#", subcategory: "Hermes" },
            { href: "#", subcategory: "Hublot" },
            { href: "#", subcategory: "HYT" },
            { href: "#", subcategory: "H. Moser & Cie" }
          ]
        },
        {
          name: 'I - Q',
          href: '#',
          imageSrc: image6,
          imageAlt: '',
          selection: [
            { href: "#", subcategory: "IWC" },
            { href: "#", subcategory: "Jaeger-LeCoultre" },
            { href: "#", subcategory: "Longines" },
            { href: "#", subcategory: "Montblanc" },
            { href: "#", subcategory: "Omega" },
            { href: "#", subcategory: "Panerai" },
            { href: "#", subcategory: "Piaget" },

          ]
        },
        {
          name: 'R - Z',
          href: '#',
          imageSrc: image7,
          imageAlt: '',
          selection: [
            { href: "#", subcategory: "Roger Dubuis" },
            { href: "#", subcategory: "Tagheuer" },
            { href: "#", subcategory: "Tudor" },
            { href: "#", subcategory: "Vacheron Constantin" },
            { href: "#", subcategory: "Vancleef" },
            { href: "#", subcategory: "Zenith" },
          ]
        },
      ],
    },



  ],
  pages: [
    { name: 'Second Hand Watches', href: '/collection/second-hand-luxury-watches' },
    { name: 'About Us', href: '/who-are-we' },

    { name: 'FAQ', href: '/faq' },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
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
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-12 px-4 py-6">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                          {category.featured.map((item, i) => (
                            <div key={item.name} className="group relative">
                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                <Image src={item.imageSrc} alt={item.imageAlt} width={400} height={400} className="object-cover object-center" />
                              </div>

                              <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>

                              {category.name === 'Main Brands' && item.selection.map((j, i) => <Link href={j.href} key={i} aria-hidden="true" className="mt-1 flex-col flex text-sm text-gray-500">{j.subcategory}</Link>)}

                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
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
                  <div className="hidden lg:flex-1 lg:flex lg:items-center">
                    <Link href="/">
                      <span className="sr-only">Workflow</span>
                      <Image
                        className="h-14  w-auto"
                        src={logo} alt=""
                      />
                    </Link>
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

                                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                <Image
                                                  width={300}
                                                  height={300}
                                                  src={item.imageSrc}
                                                  alt={item.imageAlt}
                                                  className="object-cover object-center"
                                                />
                                              </div>

                                              <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                {item.name}
                                              </a>

                                              {item.selection.map((j, index) => <Link href={j.href} key={index} aria-hidden="true" className="flex-col flex mt-1">{j.subcategory}</Link>)}

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
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
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

                    {/* Search */}
                    <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Logo (lg-) */}
                  <Link href="/" className="lg:hidden">
                    <span className="sr-only">Nonpareil Collection</span>
                    <Image
                      src={logo}
                      alt=""
                      className="h-8 w-auto"
                    />
                  </Link>

                  <div className="flex flex-1 items-center justify-end">
                    <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                      Search
                    </a>

                    <div className="flex items-center lg:ml-8">
                      {/* Help */}
                      <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                        <span className="sr-only">Help</span>
                        <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                      </a>
                      <a href="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                        Help
                      </a>

                      {/* Cart */}
                      <div className="ml-4 flow-root lg:ml-8">
                        <a href="#" className="group -m-2 flex items-center p-2">
                          <ShoppingBagIcon
                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                          <span className="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
