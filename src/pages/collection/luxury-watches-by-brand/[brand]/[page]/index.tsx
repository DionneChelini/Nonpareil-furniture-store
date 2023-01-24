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

import { GetStaticProps } from "next";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import removeDuplicatesFromArray from "@/utils/removeDuplicatesFromArray";
import ProductDisplay from "@/components/productDisplay";
import Link from "next/link";
import Image from "next/image";
import image from "@/images/audemars.jpg";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function WithExpandableDetails(props: any) {
  const { data, meta } = props;
  if (data.length === 0) {
    return (
      <div className='bg-white'>
        <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='md:flex'>
            <p>No products available</p>
          </div>
        </div>
      </div>
    );
  }

  // const category = categories.map((o: any) => o.subcategory)
  // const filtered = categories.filter(({subcategory}: {subcategory: string}, index: number) => !category.includes(subcategory, index + 1))
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='md:flex md:items-center md:justify-end'></div>
        <div className='relative aspect-[9/10] w-full  flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 h-72 sm:rounded-2xl'>
          <Image
            src={image}
            alt='some test'
            className='absolute inset-0 h-full w-full object-cover bg-white'
          />
        </div>
        <div className='mt-8 text-sm md:hidden'>
          <a
            href='#'
            className='font-medium text-indigo-600 hover:text-indigo-500'
          >
            Shop the collection
            <span aria-hidden='true'> &rarr;</span>
          </a>
        </div>
      </div>
      <ProductDisplay data={data} meta={meta} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const brands = [
    "Audemars%20piguet",
    "Patek%20philippe",
    // "Richard mille",
    // "Rolex",
    // "Blancpain",
    // "Bvlgari",
    // "Cartier",
    // "Chanel",
    // "Chopard",
    // "Dietrich",
    // "Franck Muller",
    // "Girard Perregaux",
    // "Glashutte",
    // "Gucci",
    // "Hermes",
    // "Hublot",
    // "HYT",
    // "H. Moser & Cie",
    // "IWC",
    // "Jaeger-LeCoultre",
    // "Longines",
    // "Montblanc",
    // "Omega",
    // "Panerai",
    // "Piaget",
    // "Roger Dubuis",
    // "Tagheuer",
    // "Tudor",
    // "Vacheron Constantin",
    // "Vancleef",
    // "Zenith",
    // "Other",
  ];

  let requests = brands.map((name) =>
    fetch(
      `http://localhost:1337/api/products?filters[brand][$eq]=${name}&&populate=images`
    )
  );

  Promise.all(requests)
    .then((responses) => {
      // all responses are resolved successfully
      return responses;
    })
    // map array of responses into an array of response.json() to read their content
    .then((responses) => Promise.all(responses.map((r) => r.json())))
    .then((products) => products.forEach((prod) => { }));

  return {
    fallback: false,
    paths: [
      { params: { brand: "rolex", page: "1" } },
      { params: { brand: "rolex", page: "2" } },
      { params: { brand: "rolex", page: "3" } },
      { params: { brand: "rolex", page: "4" } },
      { params: { brand: "rolex", page: "5" } },
      { params: { brand: "rolex", page: "5" } },
      { params: { brand: "audemars piguet", page: "1" } },
      { params: { brand: "audemars piguet", page: "2" } },
      { params: { brand: "audemars piguet", page: "3" } },
      { params: { brand: "audemars piguet", page: "4" } },
      { params: { brand: "audemars piguet", page: "5" } },
    ],
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  //request and response to/from strapi api
  const res = await fetch(
    `http://localhost:1337/api/products?pagination[page]=${params && params.page
    }&pagination[pageSize]=2&filters[brand][$eq]=${params?.brand && capitalizeFirstLetter(params.brand.toString())
    }&populate=images`
  );
  let data = await res.json();
  //map over data and pull out needed fields /
  // 0. Id
  // 1. Title
  // 2. Description
  // 3. Price
  // 4. Images
  // 5. Subcategory

  let mapped = data.data.map((item: any) => {
    return {
      id: item.id,
      title: item.attributes.title,
      description: item.attributes.description,
      price: item.attributes.price,
      images: item.attributes.images,
      subcategory: item.attributes.subcategory,
    };
  });
  return {
    props: {
      data: mapped,
      meta: data.meta,
    },
  };
};
