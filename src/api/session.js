import { request } from '../utils/httpServices';

export const _login = data => {
  const endpoint = '/users/login';
  return request({ endpoint, method: 'POST', data });
};
