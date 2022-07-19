var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    
    //Delete 1 entry
    // var query = {address: 'Highway 71'}
    // dbo.collection("customers").deleteOne(query, function(err, result){
    //     if(err) throw err;
    //     console.log("1 document deleted")
    //     db.close();
    // })

    //Delete many entry
    var query = {address: /^S/}
    dbo.collection("customers").deleteMany(query, function(err, result){
        if(err) throw err;
        console.log(result.deletedCount + " document deleted")
        db.close();
    })
});