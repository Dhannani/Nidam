

//const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Welcome1:Welcome1@cluster0.y1ngf.azure.mongodb.net/Dev-Test?retryWrites=true&w=majority";
/*
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();

});*/

module.exports = {
  // db: 'mongodb://localhost:27017/reactdb'
     db: uri 
 };
