const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).send({
        mensagem : 'Rodou routeur get'
    });
});

router.post('/save',(req, res, next)=>{
    res.status(201).send({
        mensagem : 'Executando post no router'
    });
});

module.exports = router;