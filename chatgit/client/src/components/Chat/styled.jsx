import styled, { createGlobalStyle } from "styled-components";

export const PageStyles = createGlobalStyle`
  body {
    background-color: #020202;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }
`;
export const ImageSend = styled.img`
height: 140px;
margin-left: 6px;
`;
export const Image = styled.img`
border-radius: 50%;
height: 40px;
margin-left: 6px;
`;
export const Container = styled.div`
  .server {
    color: red;
  }

  #imageInput {
    display: none;
  }
`;
export const Perfil = styled.div`
 display: flex;
  align-items: center; 
`;

export const EmbedSup = styled.div`
  display: flex;
  justify-content: center;
`;

export const Nick = styled.p`
  color: grey;
  font-family: sans-serif;
  font-weight: bold;
  margin-left: 10px;
`;
export const Span = styled.p`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5px;
margin-bottom: 2px;
  width: 148px;
  height: 25px;
  font-weight: bold;
  font-family: sans-serif;
  border-radius: 5px;
  background-color: grey;
  border-style: none;
  &:hover {
    background: #413b3b;
  }
`;
export const Paragrafo = styled.p`
  color: white;
  font-family: sans-serif;
  margin-left: 10px;
  overflow-wrap: break-word; 
  white-space: pre-wrap;
`;

export const Embed = styled.div`
  background-color: #222121;
  width: 700px;
  height: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  border-radius: 10px;
   &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: #101011;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #3503a8;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #230b5c; 
  }
 `;

export const Input = styled.input`
  width: 140px;
  height: 20px;
  margin-top: auto;
  margin-bottom: 5px;
  background: grey;
  border-radius: 4px;
  &::placeholder {
    color: black;
  }
`;

export const Button = styled.button`
  width: 148px;
  height: 25px;
  font-weight: bold;
  font-family: sans-serif;
  border-radius: 5px;
  background-color: grey;
  border-style: none;
  &:hover {
    background: #413b3b;
  }
`;
const mobileSize = "500px"; 

export const MobileStyles = createGlobalStyle`
  @media (max-width: ${mobileSize}) {
    ${Embed}, ${Input}, ${Button} {
      width: 100%; 
    }
  }
`;
export const ScrollToBottom = styled.div`
  float: left;
  clear: both;
`;