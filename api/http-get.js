import axios from "axios";

export const apiGet = axios.create({
  baseURL: "https://virtualtapcash-production.up.railway.app",
  headers: {
    // 'ngrok-skip-browser-warning': true,
  },
});
