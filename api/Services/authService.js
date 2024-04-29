import { api } from '../http-common';

const AuthDataService = {
  login(data) {
    return api.post('/api/v1/auth/login', data);
  },
};

export default AuthDataService;