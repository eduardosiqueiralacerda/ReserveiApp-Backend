const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.status(200).send({
        mensagem : 'Usando GET dentro da rota de clientes'
    });
});

router.get('/:idCliente',(req, res) => {
    const id = req.params.idCliente;

    res.status(200).send({
        mensagem : 'Usando GET dentro da rota de clientes com parametro, com nodemom',
        id : id
    });
});


router.post('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Usando POST dentro da rota de clientes'
    });
});


router.patch('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Usando PATCH dentro da rota de clientes'
    });
});

router.delete('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Usando DELETE dentro da rota de clientes'
    });
});

module.exports = router;