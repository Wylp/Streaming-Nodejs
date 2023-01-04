const fs = require('fs');
const request = require('request');

// O caminho para o arquivo que será enviado
const filePath = 'toUpload/bigfile.txt';

// Lê o arquivo em um stream
const file = fs.createReadStream(filePath);

// O URL do container que receberá o arquivo
const url = 'http://localhost:3000/upload';

// Configura os dados da requisição
const formData = {
  files: file
};

// Faz a requisição HTTP POST
request.post({url: url, formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});