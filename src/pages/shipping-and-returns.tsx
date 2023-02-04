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
        <title>Shipping & Returns - Nonpareil Collection</title>
      </Head>
      <div className="pt-32 overflow-hidden sm:pt-14">
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative pt-48 pb-16 sm:pb-24">
              <div>
                <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                  Shipping & Returns
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

        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-1">
          <div className="col-start-1 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">

              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Shipping & Returns
              </h3>

              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Product enquiries</h2>
              <p className="mt-4 text-lg text-gray-500">
                Please note that a ‘product enquiry’ does not constitute a final sale or transaction for a nominated product. Products presented on the Nonpareil website are subject to availability and can be withdrawn or cancelled without notice. Upon the receipt of a product enquiry, our sales team will check available stock and revert to you within 24 hours. Prices presented upon the Nonpareil website exclude shipping and delivery costs and sales tax or any applicable federal, state or foreign taxes, duties, levies or charges in any jurisdiction throughout the world related to the products or the delivery thereof (collectively referred to as ‘Taxes’).
              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Order cancellations & amendments
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Once a final order has been placed and payment has been received, it is scheduled for immediate processing and dispatch. Once an order is submitted we are unable to make any changes, additions or amendments to that order including but not limited to; change of delivery and/or billing address, changes to colours and sizes, adding or removing items, applying discounts or promotions or full order cancellations. Please ensure all details provided are complete and correct at the time of the order placement. If your order has already been processed and you wish to return an item, please contact our customer support team www.contact@nonpareilcollection.com for more information.

              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Stock availability
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Our sourcing agents are always striving to ensure that all items available for purchase are in stock, however from time to time our products are not available due to their limited availability and high market demand. Following receipt of your product enquiry, one of our service agents will contact you to confirm availability and process your order. If you have any questions regarding product availability, please contact our customer support team at www.contact@nonpareilcollection.com for more information.

              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Shipping partners
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Nonpareil has partnerships with the worlds most trusted shipping providers. Our team is comprised of dedicated logistics experts who manage the shipping of your pieces direct with our providers until they reach their destination. These methods are typically provided by a parcel delivery service such as Startack, UPS, FedEx or DHL. All shipments include insurance, can be electronically tracked and will require a signature upon receipt.

              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Shipping times
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Standard shipping: 14-21 business days. Once orders are confirmed and payment has been received, they are not able to be edited, added to or cancelled. If your order is confirmed over a weekend or on a public holiday it will be processed and sent out over the following business days (Monday – Friday). Shipping times are a guideline and subject to change. You may experience slightly longer delivery times during peak periods, due to wild weather, or due to other postal service delivery issues that are unforeseen or unavoidable events beyond our reasonable control.

              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Shipment tracking
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                You will receive an email with your tracking information once your order has been processed. You can track the progress of your order through the tracking number provided. If you are unable to locate your tracking number, or if you have any questions about your shipped order, please contact our customer support team at www.contact@nonpareilcollection.com.

              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Dispatch times
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We try to process and dispatch all orders within 1-3 business days from receipt of final payment, unless otherwise stated. Following dispatch, you will be notified via email with a tracking number. Please note: during peak periods (Sales, Public Holidays, or the day after Public Holidays), dispatch times may be longer.


              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Split shipments
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We are unable to process split shipments within one order. If you wish to ship to multiple addresses, you can do this by creating separate orders, each with their own delivery address.



              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">
                Lost or damaged goods

              </h2>
              <p className="mt-4 text-lg text-gray-500">
                If your order is lost or damaged in transit, please call our customer support team on +111111111 or email us at www.contact@nonpareilcollection.com and our customer support team will assist with your enquiry.



              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">
                International shipments

              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We will calculate your shipping costs when processing your final order. Unfortunately, due to hazardous and flammable goods restrictions, we are unable to ship hazardous goods internationally, including fragrance. Any additional taxes or duties applied by customs at the destination country are the responsibility of the delivery recipient. Please note in accordance with Italian export regulations we are required to declare the exact value of all items and identify the order as dutiable “merchandise” and are prohibited by law from identifying an order as a “gift” for export purposes. Your local customs office will be able to assist you with any further information regarding taxes, duties and customs. Items shipped internationally may be subject to customs duties and sales or Value Added Tax (VAT) set by the destination country. These fees are not calculated prior to customs clearance in that country and are in addition to the price and shipping cost you are charged when checking out. For U.S. import questions please refer to the Customs & Border Protection Website.



              </p>
              <p className="mt-4 text-lg text-gray-500">
                If your purchase is subject to customs duties and sales tax or VAT, your shipping provider will contact you about these fees, which must be paid before delivery of your purchase is scheduled. You will also be required to provide personal information for customs processing. Please note that shipping delays due to customs processing are not uncommon. Although we do not have control over customs delays and are not involved in the determination or collection of these fees, if you have any questions about customs, feel free to contact our customer support team at www.contact@nonpareilcollection.com.



              </p>


            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
