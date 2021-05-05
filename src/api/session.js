import { request } from '../utils/httpServices';

export const AuthService = {
  _login : (data) => {
    const endpoint = '/users/login';
    return request({ endpoint, method: 'POST', data });
  }
}
