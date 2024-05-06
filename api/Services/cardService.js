import { apiGet } from "../http-get";
import { api } from "../http-common";
import { apiAuth } from "../http-auth";

const cardDataService = {
  get(token, virtualTapcashId) {
    console.log(virtualTapcashId);
    return apiAuth(token).get(
      `/api/v1/card/get-cards-data/${virtualTapcashId}`
    );
  },
  ScanCard(token, data) {
    return apiAuth(token).post("api/v1/card/add-card", data);
  },
  ScanCard2(token, data) {
    return apiAuth(token).post("api/v1/card/add-card2", data);
  },
  removeCard(token, data) {
    return apiAuth(token).patch("api/v1/card/remove-card", data);
  }
};

export default cardDataService;
