const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErros, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

//captura de la informacion POST "el middleware "
app.use(express.json());

const whitelist = ['http://localhost:5500', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
};
app.use(cors(options));//hablitamos a cualquier dominio



//server express
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

//respuesta tipo de texto plano
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErros);
app.use(errorHandler);
app.use(boomErrorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});


