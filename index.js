const express = require('express');
const app = express();

app.get("/", (req, resp) => {
    resp.send("Deu certo!");
});

app.listen(3000);