/*
 * @Author: duyvpn 
 * @Date: 2021-04-22 09:20:14 
 * @Last Modified by: duyvpn
 * @Last Modified time: 2021-04-22 09:26:16
 */

import Keys from './actionKeys';

const initialState = {
  loggedIn: true,
  user: {
    first_name: 'Shen',
    last_name: 'Zhi',
    email: 'demo@devias.io',
    avatar: '/images/avatars/avatar_11.png',
    bio: 'Brain Director',
    role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
  }
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case Keys.SESSION_LOGIN: {
      return {
        ...initialState
      };
    }

    case Keys.SESSION_LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: {
          role: 'GUEST'
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;
