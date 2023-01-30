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
export default function Example() {
  return (
    <div className="bg-white mt-20 max-w-7xl mx-auto sm:px-8">
      <div className="pt-32 overflow-hidden sm:pt-14">
        <div className="bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative pt-48 pb-16 sm:pb-24">
              <div>
                <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                  Terms & Conditions
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
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Please Read Carefully</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Company Policy
              </h3>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">General</h2>
              <p className="mt-4 text-lg text-gray-500">
                These Terms and Conditions (“Terms”) are applicable to all users of www.contact@nonpareilcollection.com (the “Website”) and online customers (“you” or the “customer”) of Nonpareil. (“Nonpareil” “we” or “us”). These Terms govern the use of the Website and the offering, sale and delivery of all of products by Nonpareil. The Terms will be valid for all future online transactions with Nonpareil and visits to the Website and are not related to any other sale terms applied in retail stores or third-party websites. We reserve the right to revise these Terms. You are responsible for keeping updated with the changes in Terms that we post.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Nonpareil is not an authorised dealer or licensor of any of the Products we sell. We do not claim any rights to the trademarks, copyrights, patents or any other intellectual property subsisting in the Products, which belong solely to their developers or assignees and licensees. We obtain our Products from reputable sources who deal directly with authorised dealers and distributors, and who have certified that they have authority to resell the Products to us for resale to you. Our experts check the authenticity of each Product.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Prices contained on the Website exclude shipping and delivery costs and sales tax or any applicable federal, state or foreign taxes, duties, levies or charges in any jurisdiction throughout the world related to the Products or the delivery thereof (collectively referred to as “Taxes”). You shall also be solely responsible for any unforeseen costs incurred because of missing, incomplete or inaccurate information, instructions, or documentation you provide to Nonpareil. You will be charged the prices for the Products displayed on the Website at the time your order was placed and confirmed, provided that the Products are available for purchase at this time. We reserve the right and absolute discretion to change the prices of the Products at any time without notice. Such changes will not affect orders placed by you with respect to which we have already provided you with an order confirmation.
              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Changes to terms and conditions</h2>
              <p className="mt-4 text-lg text-gray-500">
                Nonpareil reserves the right to alter and change these terms and conditions occasionally. Changes to the terms and conditions will be effective immediately upon publication on this website. Your continued use of the website following such publication will represent an agreement by you to be bound by the terms and conditions as amended. It is your responsibility to be aware of these terms and conditions as they may be altered.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                This website and its content are provided "as is" and except to the extent required by law, without any warranties of any kind, whether express or implied, including but not limited to, implied warranties of satisfactory quality, fitness for a particular purpose and non-infringement, to the fullest extent permitted by law. The information on the website is for general information purposes only and does not constitute as advice. We do not represent or warrant that the information and/or facilities contained in the website are accurate, complete or current, or that the website will be uninterrupted or error free, or that any defects in the website will be corrected or that the website or the server that makes the website available are free of viruses or any other harmful components.

              </p>
              <p className="mt-4 text-lg text-gray-500">
                Except to the extent required by law, we do not make any warranties or representations regarding the use of the materials in the website in terms of their correctness, accuracy, adequacy, usefulness, timeliness, reliability or otherwise, in each case to the fullest extent permitted by applicable law. We reserve the right to suspend or withdraw the whole or any part of the website at any time without notice and without incurring any liability. This website may from time to time contain links to other websites. We make no warranties or representations about the accuracy or suitability of the information or links provided on this website, including information provided by third parties.

              </p>
              <p className="mt-4 text-lg text-gray-500">
                You use the information and links at your own risk. We have no control over their individual content and make no representations or warranties as to any of the information appearing in relation to any linked websites. We do not recommend any products or services advertised on those websites. If you decide to access any third party website linked from our website, you do so at your own risk.
              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Limitation of liability</h2>
              <p className="mt-4 text-lg text-gray-500">
                Your use of the website is at your own risk. Where conditions and warranties implied by applicable law cannot be excluded, we limit our liability where and to the extent we are entitled to do so. Otherwise, neither we, nor any of our affiliates, officers or directors nor any of our agents or any other party involved in creating, producing or delivering the website will be liable for any direct, indirect, special, consequential or other damages that result from the use of, or the inability to use, the materials on the website, including damages caused by viruses or any incorrectness or incompleteness of the information on the website, or the performance of the products, even if we have been advised of the possibility of any such damages.
              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Your obligations</h2>
              <p className="mt-4 text-lg text-gray-500">
                You must ensure that your access to this website is not illegal or prohibited by laws which apply to you. You must take your own precautions to ensure that the process which you employ for accessing this website does not expose you to the risk of viruses, malicious computer code or other forms of interference which may damage your own computer system. We do not accept responsibility for any interference or damage to your own computer system which arises in connection with your use of this website or any linked website. You must not misuse our system or this website. Specifically, you must not hack into, circumvent security or otherwise disrupt the operation of our website. Furthermore, you must not undertake any activity that will place an unreasonable burden on our systems. You agree to indemnify us and our respective officers, employees and agents against all actions, claims and demands which may be instituted against us arising out of your failure to comply with these terms and conditions.
              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Intellectual property</h2>
              <p className="mt-4 text-lg text-gray-500">
                All design and intellectual property featured is copyright on this website is owned by Nonpareil except as may be otherwise indicated in specific areas within the website, you are authorised to view, play, print and download documents, audio and video found on the website for personal, informational, and non-commercial purposes only except as permitted by applicable copyright laws, you may not modify any of the materials and you may not copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer or sell any information or work contained on the website. Except as authorised under the copyright laws, you are responsible for obtaining permission before reusing any copyrighted material that is available on the website.
              </p>

              <p className="mt-4 text-lg text-gray-500">
                For purposes of these terms, the use of any such material on any other website or networked computer environment is prohibited. You will not remove any copyright, trademark or other proprietary notices from material found on the website. In the event you download software (including but not limited to screensavers, icons, videos and wallpapers) from the website, the software, including any files, images incorporated in or generated by the software, and data accompanying the software (collectively, the "software") are licensed to you by us. We do not transfer title to the software to you.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                You own the medium on which the software is recorded, but we retain full and complete title to the software, and all intellectual property rights therein. Except as permitted by applicable copyright laws, you may not redistribute, sell, decompile, reverse engineer, disassemble, or otherwise reduce the software to a human-readable form. All of our trademarks, service marks and trade name “Nonpareil” used herein are our trademarks or registered trademarks, unless stated otherwise.
              </p>
              <p className="mt-4 text-lg text-gray-500">

                You may not use, copy, reproduce, republish, upload, post, transmit, distribute, or modify our trademarks in any way, including in advertising or publicity pertaining to distribution of materials on the website, without our prior written consent. the use of our trademarks on any other website or network computer environment, for example the storage or reproduction of (a part of) the website in any external internet website or the creation of links, hypertext, links or deep links between the website and any other internet website, is prohibited without our express written consent.

              </p>
              <h2 className="leading-6 text-indigo-600 mt-6 font-semibold tracking-wide uppercase">Restricted use</h2>
              <p className="mt-4 text-lg text-gray-500">

                You are authorised to print a copy of any information contained on this website for your personal use, unless such printing is expressly prohibited. Without limiting the foregoing, you may not without our written permission on sell information obtained from this website.


              </p>

            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
