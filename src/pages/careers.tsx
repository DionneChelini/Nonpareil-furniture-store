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
import Head from 'next/head'
export default function Example() {
    return (
        <div className="bg-white mt-20 max-w-7xl mx-auto sm:px-8">
            <Head>
                <title>Careers - Nonpareil Collection</title>

            </Head>
            <div className="pt-32 overflow-hidden sm:pt-14">
                <div className="bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative pt-48 pb-16 sm:pb-24">
                            <div>
                                <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                                    Careers
                                    <br />

                                </h2>
                                <div className="mt-6 text-base">
                                    <a href="#" className="font-semibold text-white">
                                        Nonpareil Collection
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

                <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                    <div className="lg:col-start-2 lg:pl-8">
                        <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">

                            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Careers
                            </h3>
                            <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Senior Financial Accounting Position</h2>

                            <p className="mt-4 text-lg text-gray-500">
                                Nonpareil are seeking the support of a high calibre Senior Financial Accountant. Working within a small designated team, this role will assume ownership of key accounting requirements for Nonpareil. As a Senior Financial Accountant in the Finance team, you will be responsible for designing and implementing best practice accounting policies, financial processes, and internal controls. Supporting the Financial Controller, you will take ownership of key technical areas of accounting and work closely with our Integrated Business Services to influence change and embed efficient processes that support timely and accurate monthly reporting and balance sheet reconciliations.


                            </p>
                            <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Digital Marketing Position</h2>

                            <p className="mt-4 text-lg text-gray-500">
                                We are currently seeking an ambitious Digital Marketer to join our expanding team. As the Digital Marketer, you will be responsible for the implementation and design of communication and effective marketing strategies across multiple digital campaigns with the goal of engaging prospective clients, driving online traffic, and generating quality leads through the company’s online presence.


                            </p>



                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

