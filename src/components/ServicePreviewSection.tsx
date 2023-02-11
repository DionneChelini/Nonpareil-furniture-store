import Link from 'next/link'
import Image from 'next/image'
import buy from '@/images/home/service-section/buy.png'
import sell from '@/images/home/service-section/sell.jpg'
import trade from '@/images/home/service-section/trade.jpg'
import consign from '@/images/home/service-section/consign.jpg'

const callouts = [
    {
        name: 'Buy',
        imageSrc: buy,
        imageAlt: 'Nonpareil Collection ',
        href: '/collection/luxury-watches/1',
    },
    {
        name: 'Sell',

        imageSrc: sell,
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '/sell-or-trade',
    },
    {
        name: 'Trade',

        imageSrc: trade,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '/sell-or-trade',
    },
    {
        name: 'Consign',

        imageSrc: consign,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '/consign',
    },
]


export default function ServicePreviewSection() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                    <h2 className="text-3xl tracking-tight flex justify-center text-gray-900 sm:text-4xl">For Those Looking To... </h2>

                    <div className="mt-6 space-y-12  lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
                        {callouts.map((callout) => (
                            <Link href={callout.href} key={callout.name} className="group relative">
                                <div className="relative mb-8 w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-full  lg:aspect-w-1 lg:aspect-h-1">
                                    <Image
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="object-center object-cover"
                                    />
                                </div>
                                <div className='bg-gray-50 opacity-90 absolute bottom-32 w-full py-2'>

                                    <h2 className="text-6xl font-sixCaps tracking-widest text-center  text-black">{callout.name}</h2>

                                </div>
                            </Link>
                        ))}
                    </div>
                    <h2 className="text-3xl tracking-tight mt-4 text-gray-900 sm:text-4xl flex justify-center">We Do It All </h2>


                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <h2 className="text-2xl tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Our Knowledgeable Staff Are Ready To Help You Find The </span>
                        <span className="block">Perfect Timepiece To Fit Your Lifestyle.</span>
                    </h2>
                    <p className='uppercase mt-8 font-semibold text-gray-500'>CONNECT NOW</p>
                    <div className="flow-root mt-4 justify-center  sm:flex">
                        <div className="group -m-2 flex justify-center items-center p-2">
                            <button
                                type="button"
                                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 sm:mr-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >

                                WhatsApp +393278659243
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