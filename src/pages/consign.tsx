import image from '@/images/home/preview.png'
import Image from "next/image"
import Head from 'next/head'


export default function Example() {
    return (
        <div className=" mt-20 max-w-7xl mx-auto sm:px-8">
            <Head>
                <title>Consignment - Nonpareil Collection</title>
            </Head>
            <div className="pt-32 overflow-hidden sm:pt-14">
                <div className="bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative pt-48 pb-16 sm:pb-24">
                            <div>
                                <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                                    Consignment
                                    <br />

                                </h2>
                                <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                                    Service
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
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                                Got a watch you'd like to sell and you want to get the best deal?
                            </h2>
                            <p className="mt-4 text-gray-500">
                                Nonpareil Collection offers a consignment service!

                                How does consignment work?
                                It's simple. You give us your watch, and your price. We sell your watch for you and charge you an agreed percentage as commission. If your watch isn't sold within 30 days, we will be happy to return you your watch at no cost.
                            </p>

                        </div>

                    </div>
                    <div className="mt-8 flex">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Consign Your Watch
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

