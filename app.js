const express = require('express');
const app = express();

const rotaClientes = require('./routes/clientes');

app.use('/clientes', rotaClientes);

app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada.');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

//Rota para validar se o server subiu.
//app.use((req, res) => {
//    res.status(200).send({
//        mensagem: 'Ok, Deu certo!'
//    });
//});

module.exports = app;