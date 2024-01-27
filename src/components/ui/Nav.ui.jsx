import React, { useState } from "react";
import { Logo, Wrapper } from ".";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="bg-neutral-200 p-3">
      <Wrapper>
        <div className=" flex justify-between">
          <Logo />
          <div className=" flex items-center gap-3">
            <NavLink
              to={"/"}
              className="text-lg hover:text-neutral-700 active:scale-95 text-neutral-600 "
            >
              Home
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Nav;
