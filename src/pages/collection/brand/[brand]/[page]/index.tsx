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
import paths from '@/paths/category_paths'
import ProductDisplay from "../../../../../components/ProductDisplay";
import Head from 'next/head'

export default function Example(props: any) {
  return <> <Head>
    <title>{props.data.length === 0 ? 'Out of Stock' : capitalizeFirstLetter(props.data[0].brand)} - Nonpareil Collection</title>
  </Head><ProductDisplay data={props.data} title={props.data.length === 0 ? 'Brand' : props.data[0].brand} /></>
}

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: paths
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  //request and response to/from strapi api
  const brand = params?.brand && params?.brand.toString().replace(/-/, ' ')
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_STRAPI}/api/products?pagination[page]=${params && params.page
    }&pagination[pageSize]=50&filters[brand][$eq]=${brand && capitalizeFirstLetter(brand)
    }&populate=images`
  );
  let data = await res.json();
  console.log(data)
  let mapped = data.data.map((item: any) => {
    return {
      id: item.id,
      title: item.attributes.title,
      price: item.attributes.price,
      brand: item.attributes.brand,
      model: item.attributes.model,
      availability: item.attributes.availability,
      images: item.attributes.images,
      subcategory: item.attributes.subcategory,
    };
  });
  return {
    props: {
      data: mapped,
      meta: data.meta,
    },
    revalidate: 30
  };
};
