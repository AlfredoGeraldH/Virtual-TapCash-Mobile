import axios from "axios";

export const apiGet = axios.create({
  baseURL: "https://a190-36-78-10-144.ngrok-free.app/",
  headers: {
    // 'ngrok-skip-browser-warning': true,
  },
});
