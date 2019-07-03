require("./../utils/db_conn");
let mongoose = require("mongoose");
let OrderModel = require("./../model/order");

// 生成订单


/*new OrderModel({
    orderName: new mongoose.Types.ObjectId(),
    products: [
        {productName: "商品一"},
        {productName: "商品二"}
    ]

}).save((err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});*/
OrderModel.findOne({orderName: "5d0b354996cf8d12dc0e40fb"}).select({orderName: 1}).exec((err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

// 查询订单

/*OrderModel.find({"_id": "5d0b256754a0093528566ad4"},"orderName", function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);

});*/

// 删除文档

/*
let orderModel = new OrderModel();
let doc = orderModel.products.id('5d0b256754a0093528566ad6', function (err, data) {
    console.log(data);
});
*/

// orderModel.products.id({'_id': '5d0b256754a0093528566ad6'}).remove();

/*
(err, data) => {
    if (err) {
        throw err;
    }
    console.log(data)
}*/
