var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);


const mongoserver = "mongodb://gg:lol123@ds137611.mlab.com:37611/tanvirsdatabase"
module.exports = {mongoose};
