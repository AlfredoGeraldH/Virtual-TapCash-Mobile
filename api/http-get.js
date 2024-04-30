import axios from "axios";

export const apiGet = axios.create({
  baseURL: "https://ddc8-180-252-165-23.ngrok-free.app",
  headers: {
    // 'ngrok-skip-browser-warning': true,
  },
});
