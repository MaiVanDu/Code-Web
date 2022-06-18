import axiosClient from "./axiosClient";

export const apiAuth = {
  login: (params) => {
    return axiosClient.get("/products", { params });
  },
  register: ({username, password, re_password, email}) => {
    const url = `/sign-up`;
    const data = {
      username,
      password,
      re_password,
      email,
    }
    return axiosClient.post(url, data);
  },
};
