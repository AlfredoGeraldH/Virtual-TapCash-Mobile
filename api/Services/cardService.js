import { apiGet } from "../http-get";
import { api } from "../http-common";
import { apiAuth } from "../http-auth";

const cardDataService = {
  get(token, virtualTapcashId) {
    console.log(virtualTapcashId)
    return apiAuth(token).get(`/api/v1/card/get-cards-data/${virtualTapcashId}`);
  },
};

export default cardDataService;
