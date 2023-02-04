import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import Link from "next/link";
import { useRouter } from "next/router";
import Banner from "./Banner";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { v4 as uuid } from 'uuid'
import type { StaticImageData } from 'next/image'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}


function ProductDisplay({
  data,

  title
}: {
  data: any;

  title: string

}) {
  const router = useRouter();



  const sortOptions = [

    { name: "Price: Low to High", href: `${router.query.brand}/${router.query.page}/priced-low-to-high/price/asc`, current: false },
    { name: "Price: High to Low", href: `${router.query.brand}/${router.query.page}/priced-high-to-low/price/desc`, current: false },

  ];

  if (data.length === 0) {

    return (
      <div className='bg-white'>

        <div className='mx-auto max-w-2xl  py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='relative aspect-[9/10]  w-full  flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-gray-100 h-80 sm:rounded-2xl'>

            <div className='md:flex h-full'>
              <div

                className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center "
              >

                <span className="mt-2 block text-sm font-medium text-gray-900">We currently don't have {router.query.brand && capitalizeFirstLetter(router.query.brand.toString())} in stock, however we are able to source {router.query.brand && capitalizeFirstLetter(router.query.brand.toString())} watches through our global network of suppliers. If you are having trouble finding a specific model, reach out to us and we may be able to help you out.  </span>
                <Link href="/contact" className="group -m-2 justify-center mt-6 flex items-center p-2">
                  <div

                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-yellow-800 py-3 px-8 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  >
                    <DevicePhoneMobileIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                    Telephone Us
                  </div>

                </Link>
              </div>


            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="bg-black">
      <Banner title={title} />
      <div className='bg-white'>
        <main className='pb-24'>

          <Disclosure
            as='section'
            aria-labelledby='filter-heading'
            className='grid items-center max-w-7xl mx-auto border-t border-b border-gray-200'
          >
            <h2 id='filter-heading' className='sr-only'>
              Filters
            </h2>
            <div className='relative col-start-1 row-start-1 py-4'>
              <div className='mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8'>

                <div className=''>
                  <h1 className='text-gray-300'>
                    &bull; / collection / brand / {router.query.brand}
                  </h1>
                </div>
              </div>
            </div>

            <div className='col-start-1 row-start-1 py-4'>
              <div className='mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8'>
                <Menu as='div' className='relative inline-block'>
                  <div className='flex'>
                    <Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                      Sort
                      <ChevronDownIcon
                        className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                        aria-hidden='true'
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <div className='py-1'>
                        {sortOptions.map((option) => (
                          <Menu.Item key={uuid()}>
                            {({ active }) => (
                              <Link
                                href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}collection/brand/${option.href}`}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </Disclosure>

          {/* Product grid */}
          <section
            aria-labelledby='products-heading'
            className='mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8'
          >
            <h2 id='products-heading' className='sr-only'>
              Products
            </h2>

            <div className='-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-3'>
              {data.map((product: any) => (
                <Link
                  href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}collection/luxury-watch/${product.brand.replaceAll(/ /gi, '-').toLowerCase()}/model/${product.model}/${product.id}`}
                  key={uuid()}
                  className='group relative border-r border-b border-gray-200 p-4 sm:p-6'
                >
                  <div className="relative bottom-0">

                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                      <svg className="mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx={4} cy={4} r={3} />
                      </svg>
                      {product.availability}
                    </span>
                  </div>
                  <div className='aspect-w-1 aspect-h-2 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75'>
                    {product.images.data[0].attributes.formats.large ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL_STRAPI + product.images.data[0].attributes.formats.large.url}`}
                        alt={product.imageAlt}
                        className='h-full w-full object-cover object-center'
                      />
                    ) : product.images.data[0].attributes.formats.medium ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL_STRAPI + product.images.data[0].attributes.formats.medium.url}`}
                        alt={product.imageAlt}
                        className='h-full w-full object-cover object-center'
                      />
                    ) : product.images.data[0].attributes.formats.small ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL_STRAPI + product.images.data[0].attributes.formats.small.url}`}
                        alt={product.imageAlt}
                        className='h-full w-full object-cover object-center'
                      />
                    ) : (
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL_STRAPI + product.images.data[0].attributes.formats.thumbnail.url}`}
                        alt={product.imageAlt}
                        className='h-full w-full object-cover object-center'
                      />
                    )}
                  </div>
                  <div className=' pb-4'>

                    <h3 className='text-sm mt-4  text-gray-600'>

                      {product.title}
                    </h3>
                    <p className='mt-1 text-base font-medium text-gray-600'>
                      {product.price > 100000 ? 'Price on request' : new Intl.NumberFormat("en-US", { style: "currency", "currency": "USD" }).format(product.price)}
                    </p>

                  </div>
                </Link>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
ProductDisplay.displayName = "ProductDisplay"

export default ProductDisplay;