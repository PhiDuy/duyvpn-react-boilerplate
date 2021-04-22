import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';

export const axiosInstance =  axios.create();

const instance = new AxiosMockAdapter(axiosInstance, { delayResponse: 0 });

export default instance;
