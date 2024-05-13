import axios from "axios";

export const apiAuth = (token) => {
  const apiAuthGetWithToken = axios.create({
    baseURL: "https://virtualtapcash-production.up.railway.app",
    headers: {
      Authorization: token,
    },
  });
  return apiAuthGetWithToken;
};
