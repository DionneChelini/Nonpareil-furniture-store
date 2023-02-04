/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/portait_rolex.jpg'
import image3 from '@/images/photos/05_6_portrait_large.jpg'
import image from '@/images/photos/portrait.jpg'
import Image from "next/image"
import { GetStaticProps } from 'next'
import Head from 'next/head'


export default function Example({ data }: any) {
  return (
    <div className="bg-white mt-20 max-w-7xl mx-auto sm:px-8">
      <Head>
        <title>FAQ - Nonpareil Collection</title>
      </Head>
      <div className="pt-32 overflow-hidden sm:pt-14">
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative pt-48 pb-16 sm:pb-24">
              <div>
                <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                  FAQ
                  <br />

                </h2>
                <div className="mt-6 text-base">
                  <a href="#" className="font-semibold text-white">
                    Frequently Asked Questions
                  </a>
                </div>
              </div>

              <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0">
                <div className="ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8">
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src={image}
                        alt=""
                      />
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <Image
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src={image1}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src={image3}
                        alt=""
                      />
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <Image
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src={image2}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src={image}
                        alt=""
                      />
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <Image
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src={image}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white max-w-7xl mx-auto">

        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">

              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  {data.map((faq: any) => (
                    <div key={faq.question}>
                      <dt className="text-xl leading-6 font-medium text-gray-900">Q. {faq.question}</dt>
                      <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_STRAPI}/api/faqs`)
  const data = await res.json();
  const mapped = data.data.map((item: any) => {
    return item.attributes
  })


  console.log(mapped)
  return {
    props: {
      data: mapped
    }
  }
}