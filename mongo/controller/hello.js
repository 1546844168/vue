/* 在引入这个模块时会手下执行这个模块里面的代码 */
require("./../utils/db_conn");

let NumberModel = require("./../model/hello");
// let doc = new NumberModel();
// doc.integerOnly = 11;
// doc.save((err, data) => {
//     if (!err) {
//         console.log(data);
//     } else {
//         console.log(err);
//     }
//
// });

/**
 *  添加文档
 * @param doc 文档
 * @param Model Model是从 Schema 编译来的构造函数。 它们的实例就代表着可以从数据库保存和读取的 documents。
 *                      从数据库创建和读取 document 的所有操作都是通过 model 进行的。
 */
function addDoc(doc, Model) {
    new Model(doc).save((err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
    })
}

var doc = {
    integerOnly: 66,
    hobby: ["music", "dance"]
};

// addDoc(doc, NumberModel);

/**
 * 查询文档
 */
/*NumberModel.find({_id: '5d0af8eb69bd8337789b6a4a'}, function (err, data) {
    if (err) {
        throw err
    } else {
        console.log(data);
    }
});*/

// 删除文档

/*NumberModel.remove({}, function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});*/

// 查询文档

/*NumberModel.findById({"_id": "5d0b16fdbbfb5b16c467ed8d"}, (err, data) => {
    if (err) {
        throw err;
    }
    data.integerOnly++;
    data.save((err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
    })
})*/


// 修改文档

/*NumberModel.update({"_id": "5d0b16fdbbfb5b16c467ed8d"}, {$set: {integerOnly: 2}}, function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});*/


