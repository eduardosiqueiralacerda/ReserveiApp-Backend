

const db = require('../config/db');

module.exports = {
    async insert(req, res) {
        const { nome, email, senha } = req.body;
        let data = {
            "nome": nome,
            "email": email,
            "senha": senha
        }
        
        try {
            let response = await db.query('INSERT INTO usuarios SET ?', [data]);
            res.json(response);    
        } catch(error) {
            console.log(error);    
        }
    },
    async update(req, res) {
        let id = req.params.id;
        const { nome, email, senha } = req.body;

        let data = {
            "nome": nome,
            "email": email,
            "senha": senha
        }
        
        try {
            let response = await db.query('INSERT INTO usuarios SET ? where id = /?', [data, id]);
            res.json(response);    
        } catch(error) {
            console.log(error);    
        }
    },
    async findAll(req, res) {
        try {
            let response = await db.query('SELECT * FROM USUARIOS');
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },
    async findById(req, res){
        let id = req.params.id;
        try {
            let response = await db.query(`SELECT * FROM USUARIOS where id = ${id}`);
            res.json(response[0]);
        }catch (error) {
            console.log(error);
        }
    },
    async delete(req,res){
        let id = req.params.id;
        try {            
            let response = await db.query(`DELETE FROM USUARIOS WHERE id = ${id}`);
            res.json(response);

        } catch (error) {
            console.log(error);
        }
    }
}
       