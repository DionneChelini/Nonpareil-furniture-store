
import ImageGrid from '@/components/ImageGrid'
import Head from 'next/head'
import Link from 'next/link'

export default function Example() {
    return (
        <div className=" mt-20 max-w-7xl mx-auto sm:px-8">
            <Head>
                <title>Sell or Trade - Nonpareil Collection</title>
            </Head>
            <div className="pt-32 overflow-hidden sm:pt-14">
                <div className="bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative pt-48 pb-16 sm:pb-24">
                            <div>
                                <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                                    Sell or Trade
                                    <br />

                                </h2>
                                <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                                    Your Watch
                                    <br />

                                </h2>
                                <div className="mt-6 text-base">
                                    <a href="#" className="font-semibold text-white">
                                        Nonpareil Collection
                                    </a>
                                </div>
                            </div>
                            <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0">
                                <ImageGrid />
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
                                Sell or Trade in your old watch to fund your Next Purchase!
                            </h2>
                            <p className="mt-4 text-gray-500">
                                Got an old watch you'd like to sell? Or just bored of what you currently have and want to change things up? We're always looking to buy in watches and would love to help you cash out on yours. Contact us by clicking the button below to provide us information  about your watch, and we will give you a free appraisal within 24 hours.
                            </p>
                        </div>

                    </div>
                    <div className="mt-8 flex">
                        <div className="inline-flex rounded-md shadow">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Sell or Trade Your Watch
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

