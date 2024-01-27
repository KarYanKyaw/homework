import React, { useContext } from "react";
import ProductSkeleton from "./ProductSkeleton.products";
import { ProductCard } from ".";
import { ApiContext } from "../../store/ApiContext";

const ProductSection = () => {
  const { data, loading, error } = useContext(ApiContext);

  return (
    <>
      <div className="space-y-10">
        {!loading && (
          <p className=" my-6 md:mb-12 text-center font-serif font-medium  text-lg md:text-3xl text-neutral-600 ">
            All Products
          </p>
        )}
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-3">
          {loading ? (
            <>
              {Array.from({ length: 6 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </>
          ) : (
            <>
              {data.map((data) => (
                <ProductCard key={data.id} {...data} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
