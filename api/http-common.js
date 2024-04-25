import axios from "axios";

export const api = axios.create({
  baseURL: "https://reqres.in",
  headers: {
    "Content-type": "/application/json",
  },
});
