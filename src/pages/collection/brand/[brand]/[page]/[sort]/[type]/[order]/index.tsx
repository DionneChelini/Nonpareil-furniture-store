import { GetStaticProps } from "next";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import paths from '@/paths/category_sort_paths'
import ProductDisplay from "@/components/Productdisplay";
import Head from 'next/head'
export default function Example(props: any) {
  return <> <Head>
    <title>{capitalizeFirstLetter(props.data[1].brand)} Collection</title>
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
  //request and response to/from strapi api
  const brand = params?.brand && params?.brand.toString().replace(/-/, ' ')
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_STRAPI}/api/products?&sort=${params?.type}%3A${params?.order}&pagination[page]=${params?.page}&pagination[pageSize]=35&filters[brand][$eq]=${brand && capitalizeFirstLetter(brand)
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
