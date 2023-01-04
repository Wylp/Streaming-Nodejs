const express = require('express');
const request = require('request');
const app = express();

app.post('/upload', (req, res) => {

    const url = 'http://172.17.0.1:3001/upload';

    req.pipe(request.post({ url: url }))

    req.on('finish', () => {
        res.send('O arquivo foi enviado com sucesso');
    })
});


app.listen(3000, () => {
    console.log('O servidor está escutando na porta 3000');
});
