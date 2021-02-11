const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.status(200).send({
        CodigoPessoa : 1,
        NomePessoa : 'Eduardo Siqueira Lacerda'
    });
});

router.get('/:codigoPessoa',(req, res) => {
    const id = req.params.codigoPessoa;

    res.status(200).send({
        mensagem : 'Usando GET dentro da rota de pessoas com parametro',
        id : id
    });
});


router.post('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Usando POST dentro da rota de pessoas'
    });
});


router.patch('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Usando PATCH dentro da rota de pessoas'
    });
});

router.delete('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Usando DELETE dentro da rota de pessoas'
    });
});

module.exports = router;