const express = require('express')
const bodyParser = require('body-parser')
const mongoose=require('mongoose')
const Book= require('./api/books')


const app =express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/api/books", Book)

mongoose.connect(
    "mongodb://localhost:27017/books",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (err,res)=>{
        err && console.log("error bd");
        app.listen(4000, ()=>{
            console.log("connect to server 4000");
        })
    }
);