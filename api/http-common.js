import axios from "axios";

export const api = axios.create({
  baseURL: "https://adapted-wolf-sensible.ngrok-free.app",
});
