import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Wrapper } from "../ui";

const Dashboard = () => {
  const { state } = useLocation();
  const nav = useNavigate();
  console.log(state);

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (!data) {
      nav("/login");
    }
  }, []);
  return (
    <div className=" min-h-screen flex items-center">
      {/* <p className="mb-3">{state.formData.email}</p> */}
      <Wrapper>
        <div className=" grid gap-8 grid-cols-10">
          <div className=" col-span-3">
            <ul className=" space-y-4">
              <li className=" border px-4 py-2 ">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className=" border px-4 py-2 ">
                <Link to="/dashboard/inventory">Inventory</Link>
              </li>
              <li className=" border px-4 py-2 ">
                <Link to="/dashboard/addnewproduct">Add New Product</Link>
              </li>
            </ul>
          </div>
          <div className=" col-span-7">
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Dashboard;
