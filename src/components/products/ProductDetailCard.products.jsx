import React from "react";
import { Wrapper } from "../ui";
import { StarCounter } from "../products";
import { Link, useNavigate } from "react-router-dom";

const ProductDetailCard = ({
  id,
  title,
  price,
  image,
  category,
  rating: { rate, count },
  description,
}) => {
  const nav = useNavigate();
  const handleClick = () => {
    nav(-1);
  };
  return (
    <Wrapper>
      <Link
        onClick={handleClick}
        className=" inline-flex px-4 py-2 select-none active:scale-95 mb-3 gap-2 bg-neutral-600 text-neutral-200 "
      >
        Go Back
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </Link>

      <div className=" border border-neutral-400 p-5 grid grid-cols-1 items-center gap-3 md:grid-cols-3">
        <div className=" flex justify-center items-center md:justify-start col-span-1">
          <img
            alt="ecommerce"
            className="rounded  md:w-80 h-40 w-40 md:h-80 object-contain"
            src={image}
          />
        </div>
        <div className=" md:col-span-2 md:border-l md:ps-5 space-y-5">
          <h2 className="text-sm title-font text-neutral-500 tracking-widest">
            {category}
          </h2>
          <h1 className="text-neutral-900 text-3xl title-font font-medium mb-1">
            {title}
          </h1>
          <div className="flex gap-3">
            <div className="rating-stars flex gap-1">
              <StarCounter rating={rate} />
            </div>
            <p className=" text-neutral-400">{count} reviews</p>
          </div>
          <p className="leading-relaxed">{description}</p>
          <div className="flex gap-8">
            <span className="title-font font-medium text-2xl text-neutral-900">
              ${price}
            </span>
          </div>
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
    </Wrapper>
  );
};

export default ProductDetailCard;
