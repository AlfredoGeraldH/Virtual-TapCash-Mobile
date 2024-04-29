import axios from "axios";

export const apiGet = axios.create({
  baseURL: "https://a045-110-137-192-136.ngrok-free.app",
  headers: {
    // 'ngrok-skip-browser-warning': true,
  },
});
