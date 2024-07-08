import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})
// porta: cada processo que precisa abrir conexão com rede precisa de uma porta, que é única por processo                