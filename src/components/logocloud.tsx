/* This example requires Tailwind CSS v2.0+ */

import Image from "next/image"
import brinks from '@/images/brinks.svg'
import stripe from '@/images/stripe.svg'
import fedex from '@/images/fedex.svg'
import revolut from '@/images/revolut.svg'
import hsbc from '@/images/hsbc.svg'


export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">A Special Thanks To Our Partners</h2>

        </div>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <Image
              className="h-40"
              src={brinks}
              alt="Brinks Secuirty & Transport"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50">
            <Image
              className="h-12"
              src={stripe}
              alt="Stripe Payments"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50">
            <Image
              className="h-12"
              src={fedex}
              alt="FedEx International Shipping & Logistics"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <Image
              className="h-12"
              src={revolut}
              alt="Currency Exchange"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <Image
              className="h-12"
              src={hsbc}
              alt="International Banking"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">

          </div>
        </div>
      </div>
    </div>
  )
}
