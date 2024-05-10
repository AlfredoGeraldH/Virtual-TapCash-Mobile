import { apiGet } from "../http-get";
import { apiAuth } from "../http-auth";

const TransactionDataService = {
  create(data) {
    return api.post("/api/user/create-user", data);
  },
  get(token, virtualTapCashId, cardId) {
    console.log(virtualTapCashId)
    return apiAuth(token).get(
      `/api/v1/transaction/get-transaction-data/account/${virtualTapCashId}/card/${cardId}`
    );
  },
  activateQR(token, cardId) {
    return apiAuth(token).post(`/api/v1/qr/activate/${cardId}`);
  },
  deactivateQR(token, cardId) {
    return apiAuth(token).post(`/api/v1/qr/deactivate/${cardId}`);
  },
};

export default TransactionDataService;
