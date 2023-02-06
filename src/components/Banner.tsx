import React from 'react'
import Image from 'next/image'
import image from '@/images/home/preview.png'

const Banner = ({ title }: { title: string }) => {



    return (
        <div className="pt-32 overflow-hidden sm:pt-14">
            <div className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative pt-48 pb-16 sm:pb-24">
                        <div>
                            <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                                {title}
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
                                            className="h-64 w-64  filter grayscale opacity-50  rounded-lg object-cover md:h-72 md:w-72"
                                            src={image}
                                            alt=""
                                        />
                                    </div>

                                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                                        <Image
                                            className="h-64 w-64  filter grayscale  opacity-30 rounded-lg object-cover md:h-72 md:w-72"
                                            src={image}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                    <div className="flex-shrink-0">
                                        <Image
                                            className="h-64 w-64 filter grayscale opacity-30 rounded-lg object-cover md:h-72 md:w-72"
                                            src={image}
                                            alt=""
                                        />
                                    </div>

                                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                                        <Image
                                            className="h-64 w-64 filter grayscale opacity-20 rounded-lg object-cover md:h-72 md:w-72"
                                            src={image}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                    <div className="flex-shrink-0">
                                        <Image
                                            className="h-64 w-64 filter grayscale opacity-20 rounded-lg object-cover md:h-72 md:w-72"
                                            src={image}
                                            alt=""
                                        />
                                    </div>

                                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                                        <Image
                                            className="h-64 w-64 filter grayscale opacity-10 rounded-lg object-cover md:h-72 md:w-72"
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
    )
}

export default Banner