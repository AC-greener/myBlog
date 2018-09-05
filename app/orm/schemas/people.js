var mongoose = require('mongoose');
var peopleSchema = new mongoose.Schema({
    name     :  {type : String},
    age      :  {type : Number},
    sex      :  {type : String}
});

//创建静态方法
peopleSchema.statics.zhaoren = function(name, callback) {
    this.model('People').find({name: name}, callback);
};

module.exports = peopleSchema;
