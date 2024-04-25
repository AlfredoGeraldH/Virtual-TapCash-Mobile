import axios from "axios";

export const apiGet = axios.create({
  baseURL: "https://reqres.in",
  headers: {
    // 'ngrok-skip-browser-warning': true,
  },
});
