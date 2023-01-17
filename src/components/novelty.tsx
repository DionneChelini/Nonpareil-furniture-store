import Image from 'next/image'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.webp'
import clsx from 'clsx'

export default function Novelty() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  
    return (
      <div className="mt-16 sm:mt-20">
        <div className="py-24 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">Patek Philippe 2023 Novelties</h1>
                <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
                  
                </p>
              </div>
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {[{img: image1, brand: 'Patek Phillip'}, {img: image2, brand: 'Rolex'}, {img: image3, brand: 'Richard Mille'}, {img: image4, brand: 'Audemars Piguet'}, {img: image5, brand: 'Roger Dubuis'}].map((image, imageIndex) => (
            <div>
            <div
              key={imageIndex}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none  rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image.img}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover bg-white"
              />
              <div className='relative bottom-0 bg-black p-1 text-white text-center'> {image.brand}</div>
              <div className='relative top-64 bg-blue-600 w-16 text-xs ml-2 justify-center flex items-center rounded-full p-1 text-white text-center'> In stock</div>
  
            </div>
            <div className="mt-6">
                  <a
                    href="/"
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Ask for Quote
                  </a>
                </div>
            </div>
          ))}
        </div>
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8 mt-12">
          {[{img: image1, brand: 'Patek Phillip'}, {img: image2, brand: 'Rolex'}, {img: image3, brand: 'Richard Mille'}, {img: image4, brand: 'Audemars Piguet'}, {img: image5, brand: 'Roger Dubuis'}].map((image, imageIndex) => (
            <div>
            <div
              key={imageIndex}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none  rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image.img}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover bg-white"
              />
              <div className='relative bottom-0 bg-black p-1 text-white text-center'> {image.brand}</div>
              <div className='relative top-64 bg-blue-600 w-16 text-xs ml-2 justify-center flex items-center rounded-full p-1 text-white text-center'> In stock</div>
  
            </div>
            <div className="mt-6">
                  <a
                    href="/"
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Ask for Quote
                  </a>
                </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 w-40 mx-auto py-6 mt-24 px-4 sm:px-6">
                    <button
                      type="submit"
                      className="w-full rounded-md border border-transparent bg-gray-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      View All
                    </button>
                  </div>
      </div>
    )
  }
  