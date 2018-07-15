const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((response) =>{
//   console.log(response);
// });
Todo.findOneAndRemove({_id:""}).then((todo)=>{

});
Todo.findByIdAndRemove("5b4ae1da4582b05c64ef400c").then((todo)=>{
  console.log(todo);
});
