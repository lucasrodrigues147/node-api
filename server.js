const express = require("express");
const mongoose = require("mongoose");

//iniciando o app
const app = express();
//iniciando db
mongoose.connect(
    'mongodb://localhost:/nodeapi',
    {useNewUrlParser:true}
    );

require('./src/models/Product');

const Product = mongoose.model('Product');

//primeira rota
app.get('/',(req,res) => {

    Product.create({
        title: 'Teste 1',
        description:"Testando",
        url:"www.teste.com.br"
    })
    return res.send('Olá');

});

app.listen(3001);
