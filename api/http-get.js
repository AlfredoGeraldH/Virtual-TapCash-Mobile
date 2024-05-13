import axios from "axios";

export const apiGet = axios.create({
  baseURL: "http://34.128.83.116:8080",
  headers: {
    // 'ngrok-skip-browser-warning': true,
  },
});
