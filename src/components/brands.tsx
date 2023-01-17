import Image from 'next/image'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.webp'
import clsx from 'clsx'

export default function Photos() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  
    return (
      <div className="mt-6 sm:mt-20">
        <div className="py-12  text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">Brand List</h1>
                <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
                  Select by brand
                </p>
              </div>
        <div className="-my-4 flex-row  sm:flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {[{img: image1, brand: 'Patek Phillip'}, {img: image2, brand: 'Rolex'}, {img: image3, brand: 'Richard Mille'}, {img: image4, brand: 'Audemars Piguet'}, {img: image5, brand: 'Roger Dubuis'}].map((image, imageIndex) => (
            <div
              key={imageIndex}
              className={clsx(
                'relative aspect-[9/10] w-60 mx-auto sm:mx-0 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
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
            </div>
          ))}
        </div>
      </div>
    )
  }