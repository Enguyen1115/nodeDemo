var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");

     //Update 1 entry
    // var query = {address: 'Lowstreet 5'}
    // var newAddress = {$set: {address: 'Lowstreet 6', name: 'Ethan'}}
    // dbo.collection("customers").updateOne(query, newAddress, function(err, result){
    //     if(err) throw err;
    //     console.log('1 document updated')
    //     db.close();
    // })

    //Update many entry
    var query = {address: /^A/}
    var newAddress = {$set: {address: 'Wattson st 6', name: 'Amelia'}}
    dbo.collection("customers").updateMany(query, newAddress, function(err, result){
        if(err) throw err;
        console.log(result.matchedCount + ' document updated')
        db.close();
    })

});