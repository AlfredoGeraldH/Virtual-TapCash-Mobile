import axios from "axios";

export const apiGet = axios.create({
  baseURL: "https://vtapcash-run-qy6nrmuwmq-et.a.run.app",
  headers: {
    // 'ngrok-skip-browser-warning': true,
  },
});
