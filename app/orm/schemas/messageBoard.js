var mongoose = require('mongoose');
var messageBoardSchema = new mongoose.Schema({
    userName: String,
    email: String,
    content: String,
    date: String,
   
});

//创建静态方法
// messageBoardSchema.statics.findAll = function(callback) {
//     this.model('MessageBoard').find({}, callback);
// };

module.exports = messageBoardSchema;
