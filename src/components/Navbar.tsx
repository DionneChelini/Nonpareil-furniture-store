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

import image from '@/images/home/service-section/buy.png'
import audemars from '@/images/home/audemars.png'
import patek from '@/images/home/patek.png'
import rm from '@/images/home/rm.png'

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
          imageSrc: image,
          imageAlt: 'Nonpareil Collection - Rolex Luxury Watches For Sale.',
          selection: [

          ]
        },
        {
          name: 'AUDEMARS PIGUET',
          href: '/collection/brand/audemars-piguet/1',
          imageSrc: audemars,
          imageAlt: 'Nonpareil Collection- Audemars Piguet Luxury Watches for Sale',
          selection: [

          ]
        },
        {
          name: 'PATEK PHILIPPE',
          href: '/collection/brand/patek-philippe/1',
          imageSrc: patek,
          imageAlt: 'Nonpareil Collection- Patek Philippe Luxury Watches for Sale',
          selection: [

          ]
        },
        {
          name: 'RICHARD MILLE',
          href: '/collection/brand/richard-mille/1',
          imageSrc: rm,
          imageAlt: 'Nonpareil Collection- Richard Mille Luxury Watches for Sale, Tourbillon Watches Richard Mille',
          selection: [



          ]
        },
      ],
    },



  ],
  pages: [
    { name: 'Sell / Trade', href: '/sell-or-trade' },
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
                                    <div className="absolute inset-0 top-1/2 shadow" aria-hidden="true" />

                                    <div className="relative bg-white">
                                      <div className="mx-auto max-w-7xl px-8">
                                        <div className="grid  grid-cols-4 gap-y-10 gap-x-8 py-16">
                                          {category.featured.map((item, i) => (

                                            <div key={item.name} className="group relative">

                                              <Link href={item.href} className="mt-4 block font-medium text-gray-900">
                                                <Popover.Button className="aspect-w-1 mb-2 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                  <Image
                                                    width={300}
                                                    height={300}
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="object-cover  bg-gray-50 object-center"
                                                  />
                                                </Popover.Button>
                                              </Link>

                                              <span className="inset-0 relative z-10" aria-hidden="true" />
                                              <Link href={item.href} className="font-semibold text-gray-900"> <Popover.Button> {item.name}</Popover.Button></Link>


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


                        <Link href="https://api.whatsapp.com/send?phone=393278659243" className="group -m-2 flex justify-center items-center p-2">
                          <div

                            className="inline-flex text-xs justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 sm:mr-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            <DevicePhoneMobileIcon className="h-4 w-4 mr-2" aria-hidden="true" />

                            WhatsApp +393278659243
                          </div>

                        </Link>
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