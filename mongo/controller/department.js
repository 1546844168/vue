require("./../utils/db_conn");

let DepartmentModel = require("./../model/department");
let EmployeeModel = require("./../model/employee");

// new DepartmentModel({"id":"1001","name":"市场部"}).save();
// new DepartmentModel({"id":"1002","name":"销售部"}).save();
// new DepartmentModel({"id":"1003","name":"行政部"}).save();
/*

    new EmployeeModel([
        {"id":"001","name":"jack","sex":1,"age":23,"dep":"5d14217af6438935a0fa1ad3"},
        {"id":"001","name":"jack","sex":1,"age":23,"dep":"5d1421a5540e1b1f6039ba65"},
        {"id":"001","name":"jack","sex":1,"age":23,"dep":"5d1421a5540e1b1f6039ba66"},
        {"id":"001","name":"jack","sex":1,"age":23,"dep":"5d1421a5540e1b1f6039ba66"},
        {"id":"001","name":"jack","sex":1,"age":23,"dep":"5d1421a5540e1b1f6039ba66"},
        {"id":"001","name":"jack","sex":1,"age":23,"dep":"5d14217af6438935a0fa1ad3"}
    ]).save((err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
    });
*/


/**
 * 插入愿佛给你
 */
function insertEmployee(employees) {
    EmployeeModel.insertMany(employees, (employees, result) => {
        if (err) {
            throw err
        }
        console.log(result)
    });
}

// let employees = [
//     {"id": "001", "name": "jack", "sex": 1, "age": 23, "dep": "5d14217af6438935a0fa1ad3"},
//     {"id": "001", "name": "jack", "sex": 1, "age": 23, "dep": "5d1421a5540e1b1f6039ba65"},
//     {"id": "001", "name": "jack", "sex": 1, "age": 23, "dep": "5d1421a5540e1b1f6039ba66"},
//     {"id": "001", "name": "jack", "sex": 1, "age": 23, "dep": "5d1421a5540e1b1f6039ba66"},
//     {"id": "001", "name": "jack", "sex": 1, "age": 23, "dep": "5d1421a5540e1b1f6039ba66"},
//     {"id": "001", "name": "jack", "sex": 1, "age": 23, "dep": "5d14217af6438935a0fa1ad3"}
// ]

/**
 * 查询所有员工以及员工所在的部门
 */
function findAllEmployee() {
    EmployeeModel.find({})    //查询所有的employees表中的数据，并将结果返回给populate
        .populate({path: 'dep'})   //上述结果集合中的dep字段用departments表中的name字段填充
        .exec(function (err, result) {
            if (err) {
                throw err
            }
            // result.forEach((value, index, array) => {
            //     console.log('name = ' + value.name + ' ' + '部门 = ' + value.dep.name)
            // })
            console.log(result)
        });
}

// findAllEmployee()

// 查询某部门下所有的员工

async function findEmployeeInDepartment(departmentId) {
    // EmployeeModel.find({dep: departmentId}).exec((err, result) => {
    //     // EmployeeModel.find().exec((err, result) => {
    //     // EmployeeModel.find().populate({path: 'dep'}).exec((err, result) => {
    //     if (err) {
    //         throw err
    //     }
    //     // console.log(result)
    // });
    let employees = await EmployeeModel.find({dep: departmentId}).exec();
    if (employees) {
        console.log('employees = ' + employees)
    } else {
        console.log('该部门下没有员工')
    }

}

let departmentId = '5d14217af6438935a0fa1ad3'
findEmployeeInDepartment(departmentId)

