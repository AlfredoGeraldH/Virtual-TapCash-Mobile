import { apiGet } from "../http-get";
import { apiAuth } from "../http-auth";

const TransactionDataService = {
  create(data) {
    return api.post("/api/user/create-user", data);
  },
  get(token, cardId) {
    console.log(cardId);
    return apiAuth(token).get(
      `/api/v1/transaction/get-transaction-data/${cardId}`
    );
  },
  activateQR(token, cardId) {
    return apiAuth(token).post(`/api/v1/transaction/activate/${cardId}`);
  },
  deactivateQR(token, cardId) {
    return apiAuth(token).post(`/api/v1/transaction/deactivate/${cardId}`);
  },
};

export default TransactionDataService;
