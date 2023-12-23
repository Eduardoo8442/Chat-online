import React, { useRef, useState, useEffect } from "react";
import { Container, Button, Paragrafo, Input, Embed, Nick, EmbedSup, ImageSend, PageStyles, Span, Image, Perfil, MobileStyles } from './styled';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
export default function Chat() {
    const inputRef = useRef();
    const socket = useSelector(state => state.setSocket.socket);
    const imagem = useSelector(state => state.setImagem.imagem);
    const [listMessage, setListMessage] = useState([]);
    const navigate = useNavigate();
    const embedRef = useRef();
    const fileInputRef= useRef();
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

         socket.emit('mensagem', { mensagem: message } );
        inputRef.current.value = '';
        setTimeout(() => {
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
    function handleFileChange() {
        const file = fileInputRef.current.files[0];
        if (!file) {
          toast.info("Selecione um arquivo.", {
            position: toast.POSITION.BOTTOM_CENTER
          });
          return;
        }
      
        const reader = new FileReader();
        reader.onload = function (e) {
          const imageData = e.target.result;
          socket.emit('mensagem', { foto: imageData });
        };
      
        reader.readAsDataURL(file);
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
                            {message.imagem ? <ImageSend src={message.imagem} /> : null}
                            {message.type === 'server' ?  <Paragrafo className="server">{message.text} ({message.hours})</Paragrafo> : <Paragrafo>{message.text}</Paragrafo> }
                            
                        </div>
                    ))}
                      <Input ref={inputRef} onKeyDown={handleKeyDown} placeholder="Enviar mensagem" />
                    <Button onClick={handleSubmit}>Enviar</Button>
                    <label htmlFor="imageInput">
                   <Span>Imagem</Span>
                      </label>
                         <input type="file" ref={fileInputRef} id="imageInput" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} />


                </Embed>
            </EmbedSup>
            <ToastContainer />
        </Container>
    );
}
