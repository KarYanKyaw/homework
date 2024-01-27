import React, { useState } from "react";
import { createAccount, isAuth } from "../../service/user.service";
import { getData } from "../../service/product.service";

import useFetch from "../../hook/useFetch";

import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  isAuth();
  const { data } = useFetch(getData, "users");
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleForm = (e) => {
    e.preventDefault();

    const alreadyExists = data.find((el) => el.email === formData.email);

    if (alreadyExists) {
      window.alert("An account with this email already exists.");
    } else if (!formData.email.trim() || !formData.password.trim()) {
      window.alert("Please fill in all fields.");
    } else {
      const newFormData = { ...formData, id: Date.now() };

      createAccount(newFormData, "users");
      console.log(newFormData);

      nav("/dashboard", { state: { formData: newFormData } });

      localStorage.setItem("auth", JSON.stringify(data));

      window.alert("Account created successfully.");
    }
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen  pt-24">
      <div className="w-3/4 md:w-1/2 lg:w-1/4  mx-auto ">
        <p className="text-center mb-2 font-serif text-xl font-bold">
          Welcome To Kyaw Gyi
        </p>
        <p className=" text-center  mb-5 text-neutral-600">
          Create Your Account for my homework
        </p>
        <form onSubmit={(e) => handleForm(e)}>
          <div className=" flex flex-col gap-3">
            <div className=" flex flex-col gap-3 ">
              <label htmlFor="email" className="text-lg select-none">
                Your Email
              </label>

              <input
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                name="email"
                placeholder="Your Email"
                className="focus:border-neutral-800 border-2 border-neutral-600 p-2 bg-white outline-none"
              />
            </div>
            <div className=" flex flex-col gap-3 ">
              <label htmlFor="password" className="text-lg select-none">
                Your Password
              </label>

              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Your Password"
                className="focus:border-neutral-800 border-2 border-neutral-600 p-2 bg-white outline-none"
              />
            </div>
            <button className=" block w-full bg-neutral-600 hover:bg-neutral-700 py-2 text-neutral-200 duration-300 ">
              Create My Account
            </button>
            <Link
              to={"/login"}
              className=" text-neutral-600 group font-semibold text-center  capitalize"
            >
              {" "}
              Already have an account?
              <span className="underline group-hover:hover:text-neutral-700">
                Login here
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
