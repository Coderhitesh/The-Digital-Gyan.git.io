const express = require('express')
const { createProduct, getAllProduct, deleteSingleProduct, singleProduct } = require('../controllers/ProductController')
const { createContact, deleteMail, getContacts } = require('../controllers/contactController')
const { createBlog, updateBlog, singleBlog, allBlogs, DeleteBlog } = require('../controllers/blogController')
const router = express.Router()

router.post('/createProduct',createProduct)
router.get('/getAllProduct',getAllProduct)
router.delete( '/deleteProduct/:id', deleteSingleProduct)
router.get( '/singleProduct/:id', singleProduct)
router.get( '/getcontact', getContacts);
router.post( '/createcontact', createContact);
router.delete('/delete-mail/:id', deleteMail)
router.post('/createBlogs', createBlog);
router.put('/updateBlog',updateBlog)
router.get('/singleBlog/:id',singleBlog)
router.get('/allBlog',allBlogs)
router.delete('/deleteBlog/:id',DeleteBlog)
module.exports = router