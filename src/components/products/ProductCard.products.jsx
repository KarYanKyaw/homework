import React from "react";
import { StarCounter } from ".";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  price,
  image,
  rating: { rate, count },
  description,
}) => {
  return (
    <div className="product-card group">
      <img
        src={image}
        className=" group-hover:-rotate-6 duration-300 transition-transform h-32 ms-5 -mb-16"
      />
      <div className=" border border-neutral-600 p-5">
        <p className=" font-heading text-xl line-clamp-1 font-bold mt-14 mb-2">
          {title}
        </p>
        <p className="text-neutral-500 text-sm h-[5rem] mb-4 line-clamp-3">
          {description}
        </p>
        <Link
          to={`productDetail/${id}`}
          className=" flex justify-end text pb-3 text-neutral-600 hover:text-neutral-700 cursor-pointer select-none underline"
        >
          see detail
        </Link>
        <div className="rating border-b border-neutral-600 pb-3 mb-3 flex justify-between">
          <div className="rating-stars flex gap-1">
            <StarCounter rating={rate} />
          </div>
          <p className=" text-neutral-700 font-medium text-sm">
            <span className="italic">rated by</span> {count}
          </p>
        </div>
        <p className="product-card-price font-heading font-bold text-xl mb-3">
          $ <span className="price">{price}</span>
        </p>
        <button className="disabled:hover:bg-transparent disabled:hover:text-gray-600 disabled:opacity-65 bg-transparent border block w-full py-2 text-neutral-600 border-neutral-600 hover:bg-neutral-600 hover:text-white duration-500">
          <div className=" flex justify-center gap-3 items-center">
            <p>Add to cart</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart-plus"
              viewBox="0 0 16 16"
            >
              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
