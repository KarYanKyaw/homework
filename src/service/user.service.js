import { useEffect } from "react";
import { api } from "./base_url";
import { useNavigate } from "react-router-dom";

export const createAccount = async (data, arg) => {
  const res = await api.post(arg, JSON.stringify(data));
  return res;
};

export const isAuth = () => {
  const nav = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      nav("/dashboard");
    }
  }, []);
};
