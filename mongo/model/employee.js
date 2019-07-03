let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var employeeSchema = new Schema({
    id: Number, //工号
    name: String, //姓名
    sex: Number, //性别
    age: Number, //年龄
    dep: {
        type: Schema.Types.ObjectId,
        ref: 'department'
    }
});


let EmployeeModel = mongoose.model("employee", employeeSchema);
module.exports = EmployeeModel;