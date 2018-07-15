var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp" || "mongodb://gg:lol123@ds137611.mlab.com:37611/tanvirsdatabase");

module.exports = {mongoose};
