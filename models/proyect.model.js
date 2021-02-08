const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const ProyectSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    technologies: {
        type: [String],
        required: true
    },
    album: {
        type: [
            { 
                small: String, 
                medium: String,
                big: String
            }
        ],
        required: true
    },
    important: {
        type: Number,
        required: true,
    },
    github: {
        type: String,
    },
    web_site: {
        type: String,
    },        
});


ProyectSchema.plugin( mongoosePaginate )


module.exports = model( 'Proyects', ProyectSchema );
