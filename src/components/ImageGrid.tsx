import React from 'react'
import image from '@/images/informationPages/jeremy-beadle-qnU-UR0o5X8-unsplash.jpg'
import image2 from '@/images/informationPages/hugo-delauney-8kbTP-IDX8A-unsplash.jpg'

import image4 from '@/images/informationPages/moughit-fawzi-_XJzWcd1NVw-unsplash.jpg'
import image5 from '@/images/informationPages/moughit-fawzi-FYcRpZMB1kY-unsplash.jpg'
import Image from "next/image"
const ImageGrid = () => {
    return (
        <div className="ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8">
            <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                <div className="flex-shrink-0">
                    <Image
                        className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src={image4}
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
                        src={image5}
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
                        src={image5}
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
    )
}

export default ImageGrid