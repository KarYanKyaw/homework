import React from "react";
import { createContext } from "react";
import useFetch from "../hook/useFetch";
import {  getData } from "../service/product.service";

export const ApiContext = createContext({
  data: null,
  error: null,
  loading: false,
});

const ApiContextProvider = ({ children }) => {
  const { data, error, loading } = useFetch(getData, "products");

  return (
    <ApiContext.Provider value={{ data, error, loading }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
