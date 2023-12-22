export const nick = (novoDado) => {
  console.log(novoDado)
    return {
      type: 'NICK',
      payload: novoDado,
    };
  };
  export const socket = (novoDado) => {
    console.log(novoDado)
      return {
        type: 'SOCKET',
        payload: novoDado,
      };
    };
    export const imagem = (novoDado) => {
      console.log(novoDado)
        return {
          type: 'IMAGE',
          payload: novoDado,
        };
      };