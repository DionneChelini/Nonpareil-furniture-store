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
import paths from '@/paths/product_paths'
import ProductDisplay from "@/components/Productdisplay";
import Head from 'next/head'

export default function Example(props: any) {
    return <> <Head>
        <title>Luxury Watches - Nonpareil Collection</title>
    </Head><ProductDisplay data={props.data} /></>
}

export const getStaticPaths = async () => {
    return {
        fallback: false,
        paths: paths
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_STRAPI}/api/products?pagination[page]=${params && params.page
        }&pagination[pageSize]=200&populate=images`
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
            availability: item.attributes.availability,
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
