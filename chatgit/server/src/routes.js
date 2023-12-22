require('dotenv').config();
const express = require('express');
const routes = express.Router();
const multerConfig = require('./config/multerConfig');

routes.get('/a', (req, res) => {
    return res.json('a')
})
routes.post('/upload', multerConfig.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).json('Nenhum arquivo foi enviado.');
    }
    const filePath = req.file.path;
  // Construa o link da imagem a partir do caminho
  const imageLink = `${process.env.URL}/uploads/${filePath.replace('uploads/', '')}`;


  res.status(200).json({ imageLink });
  });
  
  module.exports = routes;