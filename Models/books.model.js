const { default: mongoose } = require("mongoose");

const bookSchema=mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
})

const bookModel= mongoose.model("book",bookSchema);
module.exports={
    bookModel
}