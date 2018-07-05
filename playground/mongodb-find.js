//const MongoClient = require('mongodb').MongoClient;


const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
   console.log("Unable to connect to db server");
 } else{
   console.log("Connected to server");
 }
   db.collection('Todos').find({
     _id: new ObjectID("5b3c6f334574814e25f027e1")
   }).toArray().then((docs)=>{
     console.log('Todos');
     console.log(JSON.stringify(docs,undefined,2));
   },(err)=> {
     console.log("Unable to fetch todos", err);
   });

   // db.collection('Todos').find().count().then((count)=>{
   //   console.log("Todos");
   //   console.log("Todos count: " + count);
   // }, (err)=>{
   //   console.log("Unable to fetch todos", err);
   // });

   db.collection("User").find({name:"Tanvir"}).toArray().then((docs)=>{
     console.log(JSON.stringify(docs,undefined,2));
   },(err)=>{
     console.log(err);
   });
   //db.close();


});
