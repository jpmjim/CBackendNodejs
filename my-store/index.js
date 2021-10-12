const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

//captura de la informacion POST "el middleware "
app.use(express.json());
routerApi(app);

//server express
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
app.listen(port, () => {
  console.log('Mi port ' + port);
});

//respuesta tipo de texto plano
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});
