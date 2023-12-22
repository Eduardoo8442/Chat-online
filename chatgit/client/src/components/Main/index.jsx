import React, { useRef, useEffect, useState } from "react";
import { Container, Titulo, PageStyle, Embed, Input, Button, Image } from './styled';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nick, socket, imagem } from '../../store/actions/index';
import { io } from "socket.io-client";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../config/api';
export default function Main() {
  const buttonRef = useRef();
  const fileInputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imageme = useSelector(state => state.setImagem.imagem);
  useEffect(() => {
    const nick = sessionStorage.getItem('Nick');
    if (nick) return navigate('/chat');
  }, []);

  async function redirecionar() {
    const value = buttonRef.current.value;
    if (!value) return;

    const socketio = await io.connect(api);
    socketio.emit('username', {name: value, foto: imageme});
    sessionStorage.setItem('Nick', value);
    dispatch(nick(value));
    dispatch(socket(socketio));
    navigate('/chat');
  }


  function handleFileChange() {
    const file = fileInputRef.current.files[0];
    if (!file) {
      toast.info("Selecione um arquivo.", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return;
    }
    const url = `${api}/upload`;
    const formData = new FormData();
    formData.append('file', file);
    fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(result => {
      const imageLink = result.imageLink;
      dispatch(imagem(imageLink));
      toast.success("Imagem atualizada com sucesso!", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    })
    .catch(error => {
      console.error('Erro na requisição fetch:', error);
      toast.error("Erro ao atualizar a foto.", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
      
  }

  return (
    <Container>
      <PageStyle />
      <Embed>
        <label htmlFor="imageInput" style={{ cursor: 'pointer' }}>
       <Image id="imageButton" src={imageme} />
        </label>
        <input type="file" ref={fileInputRef} id="imageInput" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} />

        <Titulo>Nome e Foto</Titulo>
        <Input ref={buttonRef} placeholder='Nick' />
        <Button onClick={redirecionar}>Entrar</Button>
      </Embed>
      <ToastContainer />
    </Container>
  );
}
