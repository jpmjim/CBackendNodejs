const express = require('express');

const ProductsService= require('../services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/product.schema');


//routing
const router = express.Router();
const service = new   ProductsService();

 //respuesta en archivo json generando datafake con faker
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

//error comun de iniciar con routing con express
//todo lo que es especifico debe ir antes de todo lo que dinamico

//endpoint especifico
router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

//endpoint dinamico
router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error)
    }
  }
);

//metodo para atender POST
router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

//metodo PATCH
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

//metodo DELETE
router.delete('/:id', (req, res) => {
  const { id } =req.params;
  const rta = service.delete(id);
  res.json(rta);
});


module.exports = router;
