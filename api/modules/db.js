const MongoClient = require('mongodb').MongoClient;

const dbName = 'vuexdemo';
const uri = `mongodb://127.0.0.1:27017/${dbName}`;


module.exports = {
    MongoClient,
    dbName,
    uri
}