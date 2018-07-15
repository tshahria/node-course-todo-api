var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
const {ObjectID} = require('mongodb');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
const port = process.env.PORT || 3000;
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

app.get('/todos/:id', (req,res)=>{
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }else{
    Todo.findById(id).then((todo)=>{
      if(todo){
        res.send({todo});
      }else{
        res.status(404).send();
      }
    }).catch((e)=>{
      res.status(404).send();
    });
  }

});

app.delete('/todos/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }else{
    Todo.findByIdAndRemove(id).then((todo)=>{
      if(todo){
        res.send(todo);
      }else{
        res.status(404).send();
      }
    },(err)=>{
      res.status(400).send();
    });
  };
});
app.listen(port, ()=>{
  console.log("started on port "+ port);
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
