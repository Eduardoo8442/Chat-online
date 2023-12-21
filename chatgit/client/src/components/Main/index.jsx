import React, { useRef, useEffect } from "react";
import { Container, Titulo, PageStyle, Embed, Input, Button, Image } from './styled';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nick, socket } from '../../store/actions/index';
import { io } from "socket.io-client";
export default function Main() {
    const buttonRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
    const nick = sessionStorage.getItem('Nick');
    if(nick) return navigate('/chat');
    }, []);
  async function redirecionar() {

    const value = buttonRef.current.value;
    console.log(value, buttonRef.current)
    if(!value) return;
    const socketio = await io.connect('http://localhost:3000');
    socketio.emit('username', value);
    sessionStorage.setItem('Nick', value);
    dispatch(nick(value));
    dispatch(socket(socketio));
    navigate('/chat');
   }
    return (
   <Container>
    <PageStyle />
    <Embed>
    <label for="imageInput">
    <Image id="imageButton" src="/image/perfil.jpg" alt="Escolher Imagem" />
  </label>
  <input type="file" id="imageInput" accept="image/*" />

    <Titulo>Seu nome</Titulo>
    <Input ref={buttonRef} placeholder='Nick' />
    <Button onClick={redirecionar}>Entrar</Button>
    </Embed>
   </Container>
    )
}