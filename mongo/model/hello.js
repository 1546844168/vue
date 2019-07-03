let mongoose = require('mongoose');
let helloSchema = new mongoose.Schema({
    integerOnly: {
        type: Number,
        min: [10, 'The min value of integerOnly is 10']
    },
    hobby: {
        type: Array,
        required: true,

    }
});

let numberModel = mongoose.model("Number", helloSchema);
module.exports = numberModel;