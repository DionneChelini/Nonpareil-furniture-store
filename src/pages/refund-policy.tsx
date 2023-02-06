
import image from '@/images/home/preview.png'
import Image from "next/image"
import Head from 'next/head'

export default function Example() {
    return (
        <div className="bg-white mt-20 max-w-7xl mx-auto sm:px-8">
            <Head>
                <title>Refund Policy - Nonpareil Collection</title>
            </Head>
            <div className="pt-32 overflow-hidden sm:pt-14">
                <div className="bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative pt-48 pb-16 sm:pb-24">
                            <div>
                                <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                                    Refund Policy
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
                                                src={image}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
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
                                Refund Policy
                            </h3>
                            <p className="mt-8 text-lg text-gray-500">
                                All goods do not provide trial service. Once the package is opened, it will not be returned & refund for non-quality reasons. To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.


                            </p>
                            <p className="mt-8 text-lg text-gray-500">
                                To start a return, you can contact us at www.contact@nonpareilcollection.com or by whatsapp +111111111.
                                If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
                            </p>



                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

