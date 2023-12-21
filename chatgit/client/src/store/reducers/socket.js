const initialState = {
    socket: null,
  };
  
  const setSocket = (state = initialState, action) => {
    switch (action.type) {
      case 'SOCKET':
        return {
          ...state,
          socket: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default setSocket;