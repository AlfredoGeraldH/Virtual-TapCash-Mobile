import axios from "axios";

export const apiGet = axios.create({
  baseURL: "https://adapted-wolf-sensible.ngrok-free.app",
  headers: {
    // 'ngrok-skip-browser-warning': true,
  },
});
