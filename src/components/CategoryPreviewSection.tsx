import Link from "next/link"
//images
import richardMille from '@/images/home/rm-category.png'
import audemarsPiguet from '@/images/home/audemars-category.png'
import rolex from '@/images/home/rolex-category.png'
import patekPhilippe from '@/images/home/patek-category.png'
import other from '@/images/home/other-category.png'
import { v4 as uuid } from 'uuid'
import Image from "next/image"


const brands = [
    { image: richardMille, brand: 'Richard Mille', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto?', href: "/collection/brand/richard-mille/1" },
    { image: patekPhilippe, brand: 'Patek Philippe', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto?', href: "/collection/brand/patek-philippe/1" },
    { image: audemarsPiguet, brand: 'Audemars Piguet', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto?', href: "/collection/brand/audemars-piguet/1" },
    { image: rolex, brand: 'Rolex', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto?', href: "/collection/brand/rolex/1" },

    { image: other, brand: 'Other', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto?', href: "/collection/brand/other/1" },
]

export default function CategoryPreviewSection() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl pt-24  mx-auto px-4">

                <h2 className="sm:text-4xl text-2xl py-8 flex justify-center text-gray-900">Browse by Category</h2>
                <div className="max-w-2xl mx-auto pb-16 grid grid-cols-1  sm:grid-cols-2 gap-8  sm:pb-24 lg:max-w-7xl">
                    {brands.map((item) => {
                        return <div key={uuid()} className="relative rounded-lg overflow-hidden lg:h-96">
                            <div className="absolute inset-0">
                                <Image
                                    src={item.image}
                                    alt=""
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <div aria-hidden="true" className="relative w-full h-96 lg:hidden" />
                            <div aria-hidden="true" className="relative w-full h-32 lg:hidden" />
                            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-6 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start">
                                <div>
                                    <h2 className="text-xl font-bold text-white">{item.brand}</h2>
                                    <p className="mt-1 text-sm text-gray-300">
                                        {item.description}
                                    </p>
                                </div>
                                <Link
                                    href={item.href}
                                    className="mt-6 flex-shrink-0 flex bg-white bg-opacity-0 py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
                                >
                                    View {item.brand} Collection
                                </Link>
                            </div>
                        </div>
                    })}

                </div>
            </div>


            <div className="bg-white">
                <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <h2 className="text-2xl tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">It's time to get what you really want! Our quotes are based on </span>
                        <span className="block"> historical sales and real-time market data allowing us to give fair prices without all the hassle.</span>
                    </h2>
                    <p className='uppercase mt-8 font-semibold text-gray-500'>CONNECT NOW</p>
                    <div className="flow-root mt-4 justify-center  sm:flex">
                        <div className="group -m-2 flex justify-center items-center p-2">
                            <button
                                type="button"
                                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 sm:mr-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >

                                WhatsApp +12345678956
                            </button>

                        </div>
                        <div className="group justify-center -m-2 flex items-center p-2">
                            <button
                                type="button"
                                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 sm:mr-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >

                                <p>   Live Chat </p>
                            </button>

                        </div>
                        <Link href="/contact" className="group -m-2 justify-center  flex items-center p-2">
                            <button
                                type="button"
                                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >

                                Email
                            </button>

                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

