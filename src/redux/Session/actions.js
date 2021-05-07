/*
 * @Author: duyvpn
 * @Date: 2021-04-22 09:16:33
 * @Last Modified by: duyvpn
 * @Last Modified time: 2021-05-07 10:31:35
 */

import { toast } from "react-toastify";
import Keys from './actionKeys';
import { AuthService } from '../../api/session';

/**
 * * Catch error of thunk
 * @param {Error} error
 * @param {Dispatch} dispatch
 * @param {String} actionKey
 * @returns This return an action
 */

// Error
const onError = (error, dispatch, actionKey) => {
  toast.error(error.message);
  dispatch({
    type: actionKey,
    payload: error
  });
  return error;
};

/**
 * * Process when server response
 * @param {*} response
 * @param {Dispatch} dispatch
 * @param {String} actionKey
 * @param {String} message
 * @returns This return an action
 */
// Success
const onSuccess = (response, dispatch, actionKey, message = undefined) => {
  message !== undefined && toast.success(message);
  dispatch({
    type: actionKey,
    payload: response
  });
  return response;
};

// Actions and thunks start here

export const login = ({ username, password }) => {
  return async dispatch => {
    dispatch({
      type: Keys.SESSION_LOGIN
    });

    try {
      const response = await AuthService._login({ username, password });
      const { data, status } = response;

      if (status === 200) {
        return onSuccess(
          data.data,
          dispatch,
          Keys.SESSION_LOGIN_SUCCESS,
          'Login successful'
        );
      } else {
        throw response;
      }
    } catch (error) {
      return onError(error, dispatch, Keys.SESSION_LOGIN_FAIL);
    }
  };
};

export const logout = () => dispatch =>
  dispatch({
    type: Keys.SESSION_LOGOUT
  });
