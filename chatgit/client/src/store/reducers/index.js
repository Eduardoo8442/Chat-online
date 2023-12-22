
import { combineReducers } from 'redux';
import setNick from './setNick';
import setSocket from './socket';
import setImagem from './setImage';
const rootReducer = combineReducers({
  setNick: setNick,
  setSocket: setSocket,
  setImagem: setImagem,
});

export default rootReducer;