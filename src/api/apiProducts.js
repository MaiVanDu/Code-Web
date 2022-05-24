import axiosClient from "./axiosClient";

export const apiProducts = {
  getProducts: (params) => {
    return axiosClient.get("/products", { params });
  }
};
