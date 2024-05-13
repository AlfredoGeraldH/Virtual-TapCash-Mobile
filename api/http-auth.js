import axios from "axios";

export const apiAuth = (token) => {
  const apiAuthGetWithToken = axios.create({
    baseURL: "http://34.128.83.116:8080",
    headers: {
      Authorization: token,
    },
  });
  return apiAuthGetWithToken;
};
