import { api } from "./base_url";

export const getData = async (arg) => {
  try {
    const { data } = await api.get(arg);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
