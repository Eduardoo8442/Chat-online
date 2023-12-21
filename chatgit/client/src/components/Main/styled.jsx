import styled, { createGlobalStyle } from "styled-components";

export const PageStyle = createGlobalStyle`
  body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    background: #1a1a1a; 
  }
`;

export const Input = styled.input`
  margin: auto;
  width: 300px;
  height: 30px;
  font-size: 15px;
  background-color: #303030;
  color: #fff; 

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  transition: 800ms;
  margin: auto;
  width: 180px;
  height: 40px;
  text-transform: uppercase;
  color: white;
  background: #1a1a1a;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  font-family: sans-serif;

  &:hover {
    transition: 800ms;
    background: #444;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Embed = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #303030;
  width: 400px;
  height: 340px;
  border: 4px solid #444; 
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  #imageInput {
    display: none;
  }

  #imageButton {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    cursor: pointer;
    margin-top: 8px;

    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  color: #fff; 

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
