const express = require('express')
const { createProduct, getAllProduct, deleteSingleProduct, singleProduct } = require('../controllers/ProductController')
const router = express.Router()

router.post('/createProduct',createProduct)
router.get('/getAllProduct',getAllProduct)
router.delete( '/deleteProduct/:id', deleteSingleProduct)
router.get( '/singleProduct/:id', singleProduct)

module.exports = router