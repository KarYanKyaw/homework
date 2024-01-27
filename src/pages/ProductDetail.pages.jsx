import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { getData } from "../service/product.service";
import {
  ProductDetailCard,
  ProductDetailSkeleton,
} from "../components/products";

const ProductDetail = () => {
  const { id } = useParams();
  const { loading, data } = useFetch(getData, `products/${id}`);
  return (
    <div>
      <section className="flex flex-col py-12 md:py-24  min-h-screen ">
        {loading ? <ProductDetailSkeleton /> : <ProductDetailCard {...data} />}
      </section>
    </div>
  );
};

export default ProductDetail;
