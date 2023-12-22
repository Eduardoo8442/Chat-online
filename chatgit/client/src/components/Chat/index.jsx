import React, { useRef, useState, useEffect } from "react";
import { Container, Button, Paragrafo, Input, Embed, Nick, EmbedSup, PageStyles, Image, Perfil, MobileStyles } from './styled';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
export default function Chat() {
    const inputRef = useRef();
    const socket = useSelector(state => state.setSocket.socket);
    const imagem = useSelector(state => state.setImagem.imagem);
    const [listMessage, setListMessage] = useState([]);
    const navigate = useNavigate();
    const embedRef = useRef();
    useEffect(() => {
        if (!socket) {
            sessionStorage.removeItem('Nick');
            navigate('/');
            return;
        }
        socket.on('entrada', data => {
      setListMessage((current) => [...current, data]);
      console.log(data)
        });
        console.log(listMessage)
        socket.on('receive', data => {
            setListMessage((currentList) => [...currentList, data]);
        });

        return () => socket.off('receive');
    }, [socket]);

        function handleSubmit() {
        const message = inputRef.current.value;

        if (!message) return;

         socket.emit('mensagem', message);
        inputRef.current.value = '';
        setInterval(() => {
        const endEmbed = embedRef.current;
        endEmbed.scrollTop = endEmbed.scrollHeight;
        }, 100);
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit();
        }
    }
    return (
        <Container>
            <PageStyles />
            <MobileStyles />
            <EmbedSup>
                <Embed ref={embedRef}>
                    {listMessage.map((message, index) => (
                        <div key={index}>
                            {message.name ? (
                                <Perfil>
                                    <Image src={message.foto} />
                                    <Nick>{message.name} ({message.hours}):</Nick>
                                    </Perfil>
                            ) : null}
                            {message.type === 'server' ?  <Paragrafo className="server">{message.text} ({message.hours})</Paragrafo> : <Paragrafo>{message.text}</Paragrafo> }
                
                        </div>
                    ))}
                      <Input ref={inputRef} onKeyDown={handleKeyDown} placeholder="Enviar mensagem" />
                    <Button onClick={handleSubmit}>Enviar</Button>
                </Embed>
            </EmbedSup>
        </Container>
    );
}
