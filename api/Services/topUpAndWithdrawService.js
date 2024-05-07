import { apiAuth } from "../http-auth";

const topUpAndWithdraw = {
  post(token, data) {
    return apiAuth(token).post("/api/v1/transaction/top-up-n-withdraw", data);
  },
};

export default topUpAndWithdraw;
