let mongoose = require("mongoose");
let Schema = mongoose.Schema;
// schema 是用来定义 documents的基本字段和集合的
let productSchema = new Schema({
        "productId": String,
        "productName": String,
        "salePrice": Number,
        "productImage": String,
        "productUrl": String
    })
    // Model是操作数据库最直接的一块内容. 我们所有的CRUD就是围绕着Model 展开的
    // mongoose.model里面定义的第一个参数"good", 并不是数据库中的collection名字， 他只是collection的单数形式, 实际上在db中的collection是"goods"
module.exports = mongoose.model("good", productSchema);