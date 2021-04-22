import { toast } from 'react-toastify';
import AxiosSingleton from './axios';
import { getLocalStorage } from './localStorage';
import { LOCAL_KEYS } from '../mixins/constants';

const contentType = {
  json: 'application/json',
  formData: 'multipart/form-data',
};

const axiosInstance = AxiosSingleton.getInstance();

export const request = async ({
  endpoint,
  method,
  data,
  formData = false,
  customHeader,
}) => {
  const baseUrl = `${
    process.env.REACT_APP_API_BASE_URL

  }${endpoint}`;
  const accessToken = getLocalStorage(LOCAL_KEYS.kToken);

  const headers = {
    'Content-Type': formData ? contentType.formData : contentType.json,
    'Access-Control-Allow-Origin': '*',
    'Authorization': accessToken ? accessToken : '',
    ...customHeader,
  };

  const options = {
    method,
    url: baseUrl,
    headers,
    data: method !== 'GET' ? data : null,
  };

  const axiosResponse = await axiosInstance(options);
  if (axiosResponse.status === 500) {
    toast.error('Server Error');
    return;
  }

  return axiosResponse;
};
