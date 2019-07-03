let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProductSchema = new Schema({
    productName: String,
});
let OrderSchema = new Schema({
    orderName: Schema.Types.ObjectId,
    products: [ProductSchema]
});

let OrderModel = mongoose.model('Order', OrderSchema);
module.exports = OrderModel;