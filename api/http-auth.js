import axios from "axios";

export const apiAuth = (token) => {
  const apiAuthGetWithToken = axios.create({
    baseURL: "https://a190-36-78-10-144.ngrok-free.app/",
    headers: {
      Authorization: token,
    },
  });
  return apiAuthGetWithToken;
};
