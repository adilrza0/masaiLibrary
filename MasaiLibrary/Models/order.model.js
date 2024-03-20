const { default: mongoose } = require("mongoose");

const orderSchema=mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'book', required: true }],
    totalAmount: { type: Number, required: true }
})

const orderModel = mongoose.model("order",orderSchema);

module.exports={
    orderModel
}