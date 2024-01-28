import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  DashBoard,
  HomePage,
  ProductDetail,
  LoginPage,
  SignUpPage,
  NoutFoundPage,
} from "./pages";
import { Footer, Nav } from "./components/ui";
import { AddNewProduct, Inventory, Roles } from "./components/dashboard";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="productDetail/:id" element={<ProductDetail />} />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route index element={<Roles />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="addnewproduct" element={<AddNewProduct />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NoutFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
