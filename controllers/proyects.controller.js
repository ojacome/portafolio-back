const { response } = require('express');
const Proyects = require('../models/proyect.model');


const index = async(req, res = response) => {
    
    let { page, limit } = req.query;

    if( limit === null || limit === undefined || limit === '' ) { limit = 4;  }

    if( page === null || page === undefined || page === '' ) { page = 1; }

    try {
        const proyects = await Proyects.paginate( 
            { },
            { limit, page }
        );

        res.status(200).json({
            ok: true,
            proyects
        });

    } catch (error) {
        console.log(error)

        res.status(500).json({
            ok: false,
            msg: 'Error al consultar los proyectos.'
        });
    }

}


module.exports = {
    index
}