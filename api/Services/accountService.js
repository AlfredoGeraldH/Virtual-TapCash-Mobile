import { apiGet } from "../http-get";
import { api } from "../http-common"; 

const AccountDataService = {
  create(data) {
    return api.post("/api/user/create-user", data);
  },
  login (data) {
    return api.post("/api/v1/auth/login", data )
  },
  get(id) {
    console.log("apiGet kepanggil");
    return apiGet.get(`/api/users/${id}`);
  },
  edit(data, token) {
    return ApiAuth(token).put("/api/user/edit-user", data);
  },
  delete(data, token) {
    return ApiAuth(token).delete(`/api/user/delete-user`, { data });
  },
  changePassword(data, token) {
    return ApiAuth(token).put("/api/user/change-password", data);
  },
};

export default AccountDataService;
