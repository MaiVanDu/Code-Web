import axiosClient from "./axiosClient";

export const apiAuth = {
  login: (params) => {
    return axiosClient.post("/sign-in", params );
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
