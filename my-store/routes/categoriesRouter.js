const express = require('express');
//routing
const router = express.Router();

router.get('/:categoryId/productsRouter/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
