import { combineReducers } from 'redux';

/**
 * * Import reducer from redux folder
 */
import { sessionReducer } from '../redux';

const rootReducer = combineReducers({
  session: sessionReducer
});

export default rootReducer;
