import axios from 'axios';
import { getLocalStorage } from './localStorage';
class AxiosSingleton {
  static instance;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  // eslint-disable-next-line
  constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.;
   */
  static getInstance() {
    /**
     * Check if singleton is not exist, this will initailze the new one
     * and return if it existed
     *
     * When initalize successful, default configuration will be step up here
     */

    if (!AxiosSingleton.instance) {
      AxiosSingleton.instance = axios.create();
      const ACCESS_TOKEN = getLocalStorage('accessToken');
      AxiosSingleton.instance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${ACCESS_TOKEN}`;
      // AxiosSingleton.instance.defaults.timeout = 2500;
    }

    return AxiosSingleton.instance;
  }
}

export default AxiosSingleton;
