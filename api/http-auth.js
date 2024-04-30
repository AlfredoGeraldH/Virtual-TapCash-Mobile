import axios from "axios";

export const apiAuth = (token) => {
  const apiAuthGetWithToken = axios.create({
    baseURL: "https://ddc8-180-252-165-23.ngrok-free.app",
    headers: {
      Authorization: token,
    },
  });
  return apiAuthGetWithToken;
};
