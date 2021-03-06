    
const express = require('express');
const app = express();

//trata os arquivos como json
app.use(express.json());


const ControllerUsuarios = require('./controllers/ControllerUsuarios');

//USUARIOS
app.post('/usuario/insert', ControllerUsuarios.insert);
app.put('/usuario/update',  ControllerUsuarios.update);
app.get('/usuarios',        ControllerUsuarios.findAll);
app.get('/usuario/:id',     ControllerUsuarios.findById);
app.delete('/usuario/:id',  ControllerUsuarios.delete);



//Para não criar um monte de rotas no arquivo.js
//podemos ter nossos controllers.
//rota GET
/*
app.get('/', (req, res) => {
    res.json({ "API": "OK" });
});

//rota GET passando parametro
app.get('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.json({ "id": id });
})

//rota POST
app.post('/usuario/id', (req, res) => {
    //pega o valor passado por parametro
    let id = req.params.id;
    res.json({ "id": id });
    
    //pega o valor passado no body 
    let body = req.body;
    res.json(body);

});

//rota GET passando parametro
app.post('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.json({ "id": id });
})
*/

//define uma porta que a aplicação irá rodar.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API RODANDO NA PORTA ${PORT}`);
})
