let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var departmentSchema = new Schema({
    id: String, //部门编号
    name: String //名称
});


let DepartmentModel = mongoose.model("department", departmentSchema);
module.exports = DepartmentModel;