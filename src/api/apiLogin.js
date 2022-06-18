import axiosClient from "./axiosClient";

export const apiLogin = {
  login: (params) => {
    return axiosClient.get("/products", { params });
  },
  login: ({username, password, re_password, email}) => {
    const url = `/sign-in`;
    const data = {
      username,
      password,
      re_password,
      email,
    }
    return axiosClient.post(url, data);
  },
};
