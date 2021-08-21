const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaResto = require('./services/resto')

app.use(morgan('dev'));
app.use('/restos', rotaResto)

app.use((req, res, next)=>{
    const erro = new Error('Nao foi possivel encontrar o caminho espeficado!');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem : error.message
        }
    })
});

module.exports = app;