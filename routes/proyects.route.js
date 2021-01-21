/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');

const { index } = require('../controllers/proyects.controller');



const router = Router();


router.get( '/', index );


module.exports = router;