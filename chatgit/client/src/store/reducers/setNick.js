// src/reducers/setNick.js
const initialState = {
    // estado inicial
    setNick: '',
  };
  
  const setNick = (state = initialState, action) => {
    switch (action.type) {
      case 'EMBED':
        console.log(action.payload)
        return {
          ...state,
          setNick: action.payload,
        };
      // Adicione outros casos conforme necessário
      default:
        return state;
    }
  };
  
  export default setNick;