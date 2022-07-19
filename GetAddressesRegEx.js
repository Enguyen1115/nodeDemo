var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");

    //Find method
    // var query = {address: /^1/, name: /^C/}
    // dbo.collection("customers").find(query).toArray(function(err, result){
    //     if(err) throw err;
    //     console.log(result)
    //     db.close();

    //sorting method
    var nameSort = {name: -1}
    dbo.collection("customers").find({}).sort(nameSort).toArray(function(err, result){
        if(err) throw err;
        console.log(result)
        db.close();
    })
});