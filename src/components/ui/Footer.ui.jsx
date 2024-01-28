import React from "react";
import Wrapper from "./Wrapper.ui";

const Footer = () => {
  return (
    <footer className="mt-8 bg-neutral-200">
      <Wrapper>
        <div className="py-4 flex flex-col justify-center items-center">
          © 2024: All right reserved! Kar Yan Kyaw
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
