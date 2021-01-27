var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;


let url = "mongodb+srv://oggyUser:Aa123456789@cluster0.cmqfr.mongodb.net/IAFproj?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(url);
async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

module.exports = run;

