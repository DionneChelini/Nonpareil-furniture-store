/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { Disclosure, Tab } from '@headlessui/react'
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter'
import { DevicePhoneMobileIcon, MinusIcon, PlusIcon, } from '@heroicons/react/24/outline'
import { GetStaticProps } from 'next'
import { v4 as uuid } from 'uuid'
import fedex from '@/images/fedex.svg'
import Image from "next/image"
import Link from 'next/link'
import Head from 'next/head'
const policies = [
  { name: 'International delivery', icon: fedex, description: 'Get your order in 10-15 days' },

]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ data }: { data: any }) {

  var usd = new Intl.NumberFormat("en-US", { style: "currency", "currency": "USD" }).format(data[1].price);

  return (
    <div className="bg-white">
      <Head>
        <title>{capitalizeFirstLetter(data[1].brand) + " " + capitalizeFirstLetter(data[1].subcategory)} Item</title>
      </Head>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {data[1].images.data.map(({ attributes }: any) => (
                  <Tab
                    key={uuid()}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only"> {attributes.caption} </span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img src={`${attributes.formats.thumbnail.url}`} alt="" className="h-full w-full object-cover object-center" />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-indigo-500' : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-w-1 aspect-h-1  w-full">
              {data[1].images.data.map(({ attributes }: any) => (
                <Tab.Panel key={uuid()}>
                  {attributes.formats.large ? (
                    <img
                      src={`${attributes.formats.large.url}`}
                      alt={attributes.caption}
                      className='h-full w-full object-cover object-center'
                    />
                  ) : attributes.formats.medium ? (
                    <img
                      src={`${attributes.formats.medium.url}`}
                      alt={attributes.caption}
                      className='h-full w-full object-cover object-center'
                    />
                  ) : attributes.formats.small ? (
                    <img
                      src={`${attributes.formats.small.url}`}
                      alt={attributes.caption}
                      className='h-full w-full object-cover object-center'
                    />
                  ) : (
                    <img
                      src={`${attributes.formats.thumbnail.url}`}
                      alt={attributes.caption}
                      className='h-full w-full object-cover object-center'
                    />
                  )}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
          <div className='mt-6'>
            <h3 className='sr-only'>Description</h3>

            <div
              className='text-base text-gray-700 space-y-6'
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{data[1].title}</h1>

            <h1 className="text-xl tracking-tight text-gray-600">{data[1].model}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">{parseInt(data[1].price) > 500000 ? 'Price on Enquiry' : <>{usd} <span className='text-sm text-gray-400 capitalize'>USD</span> </>} </p>
            </div>


            <div className="sm:flex-col1 mt-10 flex">

              <Link href="/contact" className="group -m-2 flex items-center p-2">
                <button
                  type="button"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-green-600 py-3 px-8 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  <DevicePhoneMobileIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                  Telephone Us
                </button>

              </Link>

            </div>


            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                {data[1].details.map((item: any) => item.description &&
                  <Disclosure as="div" key={uuid()}>
                    {({ open }) => (

                      <div>
                        <h3>
                          <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                            >
                              {item.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel as="div" className="prose prose-sm pb-6">

                          <li>{item.description}</li>


                        </Disclosure.Panel>
                      </div>
                    )}
                  </Disclosure>
                )}
              </div>
            </section>
            {/* Policies */}
            <section aria-labelledby="policies-heading" className="mt-10">
              <h2 id="policies-heading" className="sr-only">
                Our Policies
              </h2>

              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                {policies.map((policy) => (
                  <div key={uuid()} className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                    <dt>
                      <Image
                        className="h-12 rounded-lg object-contain mx-auto"
                        src={fedex}
                        alt=""
                      />
                      <span className="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </div >
    </div >
  )
}










export const getStaticPaths = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_STRAPI}/api/products?populate=images`)
  let products = await res.json();

  const paths = products.data.map((item: any) => {
    return { params: { brand: item.attributes.brand.replace(/ /ig, '-').toLowerCase(), model: item.attributes.model, id: item.id.toString() } }
  })
  return {
    fallback: false,
    paths
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  let id = context.params && context.params.id
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_STRAPI}/api/products/${id}?populate=*`)
  let product = await res.json();


  return {
    props: {
      data: Object.entries(product.data)[1]
    },
    revalidate: 60
  }


}