import { apiGet } from "../http-get";
import { api } from "../http-common";
import { apiAuth } from "../http-auth";

const AccountDataService = {
  create(data) {
    return api.post("/api/user/create-user", data);
  },
  get(token) {
    return apiAuth(token).get("/api/v1/account/get-user-data");
  },
};

export default AccountDataService;
