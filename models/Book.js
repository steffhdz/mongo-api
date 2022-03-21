const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const BookSchema = new Schema({
    name: {type:String},
    author:{type:String},
    year:{type:String}

});

module.exports=User=mongoose.model('Book', BookSchema);