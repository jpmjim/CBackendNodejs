const express = require('express');
const faker = require('faker');

//routing
const router = express.Router();

 //respuesta en archivo json generando datafake con faker
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 15;
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
router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

//endpoint dinamico
router.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
      id,
      name: 'Prodcut 2',
      price: 2000
  });
});

//metodo para atender POST
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})

module.exports = router;
