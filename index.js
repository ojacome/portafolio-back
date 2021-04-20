require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const forceSsl = require('force-ssl-heroku');
const { dbConnection } = require('./database/config')


const app = express();
const port = process.env.PORT || '3900';

// Configurar CORS
app.use( cors() );

//logger en consola 
app.use( morgan('dev'));

// Lectura y parseo del body
app.use( express.json() );

// Base de datos
dbConnection();

//redirect https heroku
app.use(forceSsl);

// Directorio público
app.use( express.static('public') );

// Rutas
app.use( '/api/proyects', require('./routes/proyects.route') );
app.get('/api', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

// confi para SPA
app.get('*', (req, res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
