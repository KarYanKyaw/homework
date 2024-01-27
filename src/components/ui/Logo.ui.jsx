import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className=" text-neutral-700 font-mono text-2xl font-bold select-none"
      aria-label="Brand"
    >
      Kyaw Gyi
    </Link>
  );
};

export default Logo;
