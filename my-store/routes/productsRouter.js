const express = require('express');
const ProductsService= require('../services/product.service');
//routing
const router = express.Router();
const service = new   ProductsService();

 //respuesta en archivo json generando datafake con faker
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

//error comun de iniciar con routing con express
//todo lo que es especifico debe ir antes de todo lo que dinamico

//endpoint especifico
router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

//endpoint dinamico
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

//metodo para atender POST
router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

//metodo PATCH
router.patch('/:id', (req, res) => {
  const { id } =req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

//metodo DELETE
router.delete('/:id', (req, res) => {
  const { id } =req.params;
  res.json({
    message: 'deleted',
    id,
  });
});


module.exports = router;
