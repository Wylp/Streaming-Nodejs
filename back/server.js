const express = require('express');
const Busboy = require('busboy');
const fs = require('fs')
const app = express();

app.post('/upload', (req, res) => {
    // O arquivo enviado está disponível em req.file

    const busboy = Busboy({ headers: req.headers });

    // Trata os arquivos enviados no formulário
    busboy.on('file', (name, file, info) => {
        const { filename, encoding, mimeType } = info;

        console.log(`Arquivo recebido: ${JSON.stringify(filename)}`);

        // Cria a stream de escrita para o arquivo
        const writeStream = fs.createWriteStream('./uploads/' + filename);

        // Encadeia a stream de leitura do arquivo para a stream de escrita
        file.pipe(writeStream);
    });
    // Inicia o processamento do corpo da requisição
    req.pipe(busboy);

    res.send('O arquivo foi salvo com sucesso');

});

app.listen(3001, () => {
    console.log('O servidor está escutando na porta 3001');
});
