var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb:<tshahria>:<randomuser1>@ds137611.mlab.com:37611/tanvirsdatabase");

module.exports = {mongoose};
