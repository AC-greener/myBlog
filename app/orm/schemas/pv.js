var mongoose = require('mongoose');

var pvSchema = new mongoose.Schema({
  pv: {type: Number, default: 0}
})

module.exports = pvSchema;