import axios from "axios";

export const apiAuth = (token) => {
  const apiAuthGetWithToken = axios.create({
    baseURL: "https://vtapcash-run-qy6nrmuwmq-et.a.run.app",
    headers: {
      Authorization: token,
    },
  });
  return apiAuthGetWithToken;
};
