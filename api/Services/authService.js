import { apiAuth } from "../http-auth";
import { api } from "../http-common";

const AuthDataService = {
  login(data) {
    return api.post("/api/v1/auth/login", data);
  },
  delete(data, token) {
    return apiAuth(token).delete(`/api/user/delete-user`, { data });
  },
};

export default AuthDataService;
