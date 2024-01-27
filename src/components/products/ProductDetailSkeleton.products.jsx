import React from "react";
import { Wrapper } from "../ui";

const ProductDetailSkeleton = () => {
  return (
    <Wrapper>
      <div className=" border border-neutral-200 p-5 grid grid-cols-1 items-center gap-3 md:grid-cols-3">
        <div className=" flex justify-center items-center md:justify-start col-span-1">
          <div className="rounded  md:w-80 h-40 w-40 md:h-80 bg-neutral-200 animate-pulse"></div>
        </div>
        <div className=" md:col-span-2 md:border-l md:ps-5 space-y-5">
          <div className="h-4 w-24 bg-neutral-200 rounded mb-2" />
          <div className="h-4 w-full bg-neutral-200 rounded mb-2" />
          <div className="h-4 w-12 bg-neutral-200 rounded mb-2" />

          <div className="h-4 bg-neutral-200 rounded mb-2" />

          <div className="flex gap-8">
            <div className="h-4 bg-neutral-200 rounded mb-2" />

            <div className="h-8 bg-neutral-200 rounded mb-2" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductDetailSkeleton;
