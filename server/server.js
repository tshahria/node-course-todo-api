var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/users.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({
      todos:todos,
    });
  },(err)=>{
    res.send(400).send(e);
  });
});
app.listen(3000, ()=>{
  console.log("started on port 3000");
});

module.exports = {
  app:app
};
// var newTodo = Todo({
//   text: " ",
//   completed: true,
//   completedAt: 1
//
// });
//
// newTodo.save().then((doc)=>{
//   console.log(doc);
// },(err)=>{
//   console.log(err);
// });
