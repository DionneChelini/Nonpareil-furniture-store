
import image from '@/images/home/preview.png'
import Image from "next/image"
import Head from 'next/head'
const items = [
  { id: 1, item: 'to meet the purpose for which it was submitted; or' },
  { id: 2, item: 'for the purpose of processing and delivering your request; or' },
  { id: 3, item: 'we have your consent to share the information; or' },
  { id: 4, item: 'if we are required or authorised by law to disclose the information; or' },
  { id: 5, item: 'if your personal information is collected in connection with a joint promoter, to that joint promoter for marketing and research purposes.' },
  // More items...
]

export default function Example() {
  return (
    <div className="bg-white mt-20 max-w-7xl mx-auto sm:px-8">
      <Head>
        <title>Privacy Policy - Nonpareil Collection</title>
      </Head>
      <div className="pt-32 overflow-hidden sm:pt-14">
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative pt-48 pb-16 sm:pb-24">
              <div>
                <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                  Privacy Policy
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

        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-1">
          <div className="col-start-1 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">PERSONAL</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Privacy
              </h3>
              <p className="mt-8 text-lg text-gray-500">
                Nonpareil acknowledges and respects the privacy of individuals. This policy sets out the way in which we will use, manage and protect your personal information.
              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">How Do We Collect Information?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Nonpareil may collect personal information from you including your name, address, telephone number and email address when you knowingly provide us with information, including when you create an account on this website.
              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">How Do We Use Information?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Nonpareil may have access to, and use the personal information that you submit to us and that we collect via your activity on this website, your activity as a Nonpareil account holder or your purchase activity in store and via this website and process that information to provide and improve our services. Nonpareil may disclose this information to its affiliated companies both in Italy and overseas. Nonpareil may disclose this information to its suppliers, contractors or agents for the purpose of providing the goods and services that you have ordered and/or requested. Nonpareil may also now and again send you offers or information on goods or services that Nonpareil considers will be of interest to you. Nonpareil may also allow that information to be given to third parties for a similar purpose unless you have clearly indicated that this is not to occur.
              </p>
              <p className="mt-8 text-lg text-gray-500">
                Personal information that you submit to us including your name, address, telephone number, email address and other information you may provide, may be disclosed to a third party:
              </p>
              <ol role="list" className=" ml-10 mt-4">
                {items.map((item) => (
                  <li key={item.id} className="py-2  list-disc text-lg text-gray-500">
                    {item.item}
                  </li>
                ))}
              </ol>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Sensitive Information</h2>

              <p className="mt-4 text-lg text-gray-500">
                Nonpareil will not collect use or disclose sensitive information (such as information about racial or ethnic origins or political or religious beliefs) except with your specific consent.
              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Click-stream Data</h2>
              <p className="mt-4 text-lg text-gray-500">
                Each time you visit the website our server collects some anonymous information, known as click-stream data, including the type of browser and system you are using; the address of the site you have come from and move to after your visit; the date and time of your visit; and your server’s IP address. Nonpareil may collect this information for statistical purposes to find out how the website is used and navigated, including the number of hits, the frequency and duration of visits and the most popular session times. We may use this information to evaluate and improve our website performance.
              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Cookies</h2>
              <p className="mt-4 text-lg text-gray-500">
                A “Cookie” is a piece of information that our web server may send to your machine when you visit our website. The Cookie is stored on your machine, but does not identify you or give us any information about your computer. A Cookie helps us to recognise you when you re-visit our Website and to co-ordinate your access to different pages on the website. With most Internet Browsers, you can erase Cookies from your computer hard drive, block all Cookies, or receive a warning before a Cookie is stored. If you want to do this, refer to your browser instructions or help screen to learn more.
              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Links to other sites</h2>
              <p className="mt-4 text-lg text-gray-500">
                Nonpareil may provide links to other sites. If you use these links, you will leave our website and we are not responsible for any of these sites, their content or their usage of your personal information. We advise that you check the privacy policies on those sites.
              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Contact us</h2>
              <p className="mt-4 text-lg text-gray-500">
                Please contact us on www.contact@nonpareilcollection.com if you wish to discuss any privacy issues, or if you do not wish to receive any future communications from Nonpareil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

