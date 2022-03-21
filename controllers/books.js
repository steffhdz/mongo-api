const mongoose=require('mongoose');
const User=require('../models/Book');

const findAllBooks=(req, res)=>{
    User.find((err,books)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(books);
    });
};

const findById=(req,res)=>{
        User.findById(req.params.id,(err, user)=>{
            err && res.status(500).send(err.message);

            res.status(200).json(book);
        });
};

const addBook = (req, res)=>{
    let user= new Book({
        name:req.body.name,
        author: req.body.author,
        year:req.body.year
    });

    book.save((err,bks)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(bks);
    });
};

module.exports={findAllBooks, findById, addBook};