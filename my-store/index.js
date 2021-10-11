const express = require('express');
const faker = require('faker');
const app = express();
const port = 3005;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

//respuesta tipo de texto plano
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

//respuesta en archivo json generando datafake con faker
app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      imagen: faker.image.imageUrl(),
    });
  };
  res.json(products);
});

//error comun de iniciar con routing con express
//todo lo que es especifico debe ir antes de todo lo que dinamico

//endpoint especifico
app.get('/products/filter', (req, res) => {
  res.send('Soy un filter');
});

//endpoint dinamico
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
      id,
      name: 'Prodcut 2',
      price: 2000
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
});


app.get('/categories/:categoryId/products/:productId', (req, res) =>{
  const { categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});
