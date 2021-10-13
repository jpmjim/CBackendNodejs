const express = require('express');
const routerApi = require('./routes');

const { logErros, errorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

//captura de la informacion POST "el middleware "
app.use(express.json());


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

app.listen(port, () => {
  console.log('Mi port ' + port);
});


