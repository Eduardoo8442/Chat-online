
import { combineReducers } from 'redux';
import setNick from './setNick';
import setSocket from './socket';

const rootReducer = combineReducers({
  setNick: setNick,
  setSocket: setSocket,
});

export default rootReducer;