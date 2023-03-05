import ImageGrid from '@/components/ImageGrid'
import Head from 'next/head'
import Link from 'next/link'
export default function Example() {
  return (
    <div className="bg-white mt-20 max-w-7xl mx-auto sm:px-8">
      <Head>
        <title>Contact - Nonpareil Collection</title>
      </Head>
      <div className="pt-32 overflow-hidden sm:pt-14">
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative pt-48 pb-16 sm:pb-24">
              <div>
                <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                  Get In Touch
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
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="divide-y-2 divide-gray-200">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Contact Details</h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Email</h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>contact@nonpareilcollection.com</dd>
                    </div>

                  </dl>
                </div>
                <Link href="https://api.whatsapp.com/send?phone=393278659243">

                  <h3 className="text-lg leading-6 font-medium text-gray-900">WhatsApp</h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">WhatsApp</dt>
                      <dd>+393278659243</dd>
                    </div>

                  </dl>
                </Link>



              </div>
            </div>

          </div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 mt-24">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Location</h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Australia</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Melbourne, Victoria</dt>
                    <dd>100 Harbour Esplanade, Docklands</dd>
                    <dd>Victoria, Australia, 3008</dd>
                  </div>

                </dl>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Italy</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>

                    <dd>Online store only</dd>

                  </div>

                </dl>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Hong Kong</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>

                    <dd>Online store only</dd>

                  </div>

                </dl>
              </div>




            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 mt-24">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Sales Staff</h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Australia</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Australian Sales Staff</dt>
                    <dd>Dionne Chelini</dd>
                    <dd>Adrian Chelini</dd>
                    <dd>Gianni Santancito</dd>



                  </div>

                </dl>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Italy</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Italian Sales Staff</dt>
                    <dd>Daniele Marchei</dd>

                  </div>

                </dl>
              </div>





            </div>
          </div>


        </div>
      </div>

    </div>

  )
}
