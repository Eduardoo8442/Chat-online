const initialState = {
    imagem: '/image/perfil.jpg',
  };
  
  const setImagem = (state = initialState, action) => {
    switch (action.type) {
      case 'IMAGE':
        return {
          ...state,
          imagem: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default setImagem;