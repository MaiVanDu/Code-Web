import axiosClient from "./axiosClient";

export const apiProducts = {
  getProducts: (params) => {
    return axiosClient.get("/products", { params });
  },
  get: (id) => {
    const url =`/products${id}`;
    return axiosClient.get(url);
  }
};
