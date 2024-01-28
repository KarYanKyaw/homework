import React from "react";
import { Wrapper } from "../components/ui";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className=" flex min-h-screen flex-col justify-center items-center">
      <Wrapper>
        <div className="">
          <p className=" text-xl mb-3 text-center font-bold text-neutral-800 ">
            Error 404! Please go back home
          </p>
          <div className=" flex justify-center w-full">

          <Link
            to={"/"}
            className=" inline-flex bg-neutral-400 hover:bg-neutral-500 duration-300 py-2 px-4 text-neutral-100 rounded"
          >
            Go Home
          </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NotFoundPage;
