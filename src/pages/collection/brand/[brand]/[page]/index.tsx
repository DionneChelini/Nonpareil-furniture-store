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
import paths from '../../../../../paths/category_paths'
import ProductDisplay from "@/components/productDisplay";

export default function Example(props: any) {
  return <ProductDisplay data={props.data} meta={props.meta} />
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

  let mapped = data.data.map((item: any) => {
    return {
      id: item.id,
      title: item.attributes.title,
      price: item.attributes.price,
      brand: item.attributes.brand,
      model: item.attributes.model,
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
