var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    
    //Find the first set of info on the array
    // dbo.collection("customers").findOne({}, function(err, result){
    //     if(err) throw err;
    //     console.log(result.name)
    //     db.close();
    // })

    //Find everything/anything in the array on the db
    // dbo.collection("customers").find({name: "ConnectMe Ltd"}).toArray(function(err, result){
    //     if(err) throw err;
    //     console.log(result[0].address)
    //     db.close();
    // })

    //Only show the x amount entry
    dbo.collection("customers").find({}).limit(3).toArray(function(err, result){
        if(err) throw err;
        console.log(result)
        db.close();
    })
});