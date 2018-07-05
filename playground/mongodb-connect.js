//const MongoClient = require('mongodb').MongoClient;


const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
   console.log("Unable to connect to db server");
 } else{
   console.log("Connected to server");

   // db.collection("Todos").insertOne({
   //   text:"Homework to do",
   //   completed: "False"
   // }, (err,result)=>{
   //   if(err){
   //     console.log("Unable to insert to do", err);
   //   }else{
   //     console.log(JSON.stringify(result.ops,undefined,2));
   //   }
   // });

   // db.collection("User").insertOne({
   //   name: "Tanvir",
   //   age: 19,
   //   location: "Providence"
   // }, (err,result)=>{
   //   if(err){
   //     console.log("Unable to insert to do", err);
   //   }else{
   //     console.log(result.ops[0]._id.getTimestamp());
   //   }
   // })
   db.close();
 }

});
