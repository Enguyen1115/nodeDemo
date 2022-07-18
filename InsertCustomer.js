var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    
    var myObj = {_id: 456, name: "ViewTech Ltd", address: "16 ave SE"};
    dbo.collection("customers").insertOne(myObj, function(err, res){
        if(err) throw err;
        console.log("1 document inserted")
        console.log(res)
        db.close();
    })
});