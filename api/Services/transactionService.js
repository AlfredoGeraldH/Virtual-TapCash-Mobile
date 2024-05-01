import { apiGet } from "../http-get";
import { apiAuth } from "../http-auth";

const TransactionDataService = {
  create(data) {
    return api.post("/api/user/create-user", data);
  },
  get(token, cardId) {
    console.log(cardId)
    return apiAuth(token).get(`/api/v1/transaction/get-transaction-data/${cardId}`);
  },
  // edit(data, token) {
  //   return ApiAuth(token).put("/api/user/edit-user", data);
  // },
  // delete(data, token) {
  //   return ApiAuth(token).delete(`/api/user/delete-user`, { data });
  // },
  // changePassword(data, token) {
  //   return ApiAuth(token).put("/api/user/change-password", data);
  // },
};

export default TransactionDataService;
