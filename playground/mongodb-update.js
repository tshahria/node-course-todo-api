//const MongoClient = require('mongodb').MongoClient;


const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
   console.log("Unable to connect to db server");
 } else{
   console.log("Connected to server");

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b3c6f334574814e25f027e1")
  // },{
  //   $set:{
  //     completed:true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('User').findOneAndUpdate({
    _id: new ObjectID("5b3dab762688215bf77c3622")
  },{
    $set:{
      name:"Tanvir"
    }
  },{
    returnOriginal:true
  }).then((result)=>{
    console.log(result);
  });
   db.close();
 }

});
