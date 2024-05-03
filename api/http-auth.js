import axios from "axios";

export const apiAuth = (token) => {
  const apiAuthGetWithToken = axios.create({
    baseURL: "https://adapted-wolf-sensible.ngrok-free.app",
    headers: {
      Authorization: token,
    },
  });
  return apiAuthGetWithToken;
};
