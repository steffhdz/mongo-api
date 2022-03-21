const BookController= require('../controllers/books')
const express=require('express');


const router=express.Router();

router.get("/all",BookController.findAllBooks);

router.get('/:id', BookController.findById);

router.post('/add',BookController.addBook);


module.exports=router;


