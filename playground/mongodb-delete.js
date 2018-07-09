//const MongoClient = require('mongodb').MongoClient;


const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
   console.log("Unable to connect to db server");
 } else{
   console.log("Connected to server");

   // db.collection("Todos").deleteMany({text:"get sleep"}).then((result)=>{
   //   console.log(result);
   // },(err)=>{
   //   console.log(err);
   // });

   // db.collection("Todos").deleteOne({text:"get sleep"}).then((result)=>{
   //   console.log(result);
   // },(err)=>{
   //   console.log(err);
   // });

   // db.collection("Todos").findOneAndDelete({completed:false}).then((result)=>{
   //   console.log(result);
   // },(err)=>{
   //   console.log(err);
   // });

   // db.collection("User").deleteMany({name:"Tanvir"}).then((result)=>{
   //   console.log(result);
   // },(err)=>{
   //   console.log(err);
   // });
   db.collection("User").findOneAndDelete({
     _id: new ObjectID("5b3db9b7a2025f5d73adeab6")
   }).then((result)=>{
     console.log(result);
   },(err)=>{
     console.log(err);
   })

   //db.close();
 }

});
