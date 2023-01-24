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
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from 'react';
import { Disclosure, RadioGroup, Tab } from '@headlessui/react';
import { GetStaticProps, GetStaticPaths } from 'next'

// import { StarIcon } from '@heroicons/react/solid';
// import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function WithExpandableDetails(props: any) {

  const { product } = props
  console.log(product)
  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>


          <h1>{product.title}</h1>
          <h1>${product.price}</h1>
          <h1>{product.availability}</h1>
          <h1>{product.description}</h1>
          <h1>{product.imageSrc[0].attributes.formats.large.url}</h1>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:1337/api/products?populate=images')
  let products = await res.json();

  let ids = products.data.map((item: any) => {
    return item.id
  })
  const paths = ids.map((item: any) => {
    return { params: { id: item.toString() } }
  })
  return {
    fallback: false,
    paths
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  let id = context.params && context.params.id
  const res = await fetch(`http://localhost:1337/api/products/${id}?populate=images`)
  let product = await res.json();

  product = {
    title: product.data.attributes.title,
    description: product.data.attributes.description,
    availability: product.data.attributes.availability,
    price: product.data.attributes.price,
    brand: product.data.attributes.brand,
    imageSrc: product.data.attributes.images.data
  }

  return {
    props: {
      product
    }

  }


}