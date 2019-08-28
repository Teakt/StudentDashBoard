const MongoClient = require('mongodb').MongoClient
      bcrypt = require('bcryptjs')
      uri = "mongodb+srv://ghaust:EW63BjZ6FFBv5L6X@web-project-nvcrn.mongodb.net/test?retryWrites=true&w=majority";
      client = new MongoClient(uri, { useNewUrlParser: true })
      collection = client.db("Esiea").collection("Students")
let Student = require('./Student')
var express = require('express')
    app = express()

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        next()
      })


/* Première route /authentification
On récupère un email et un mdp dans l'URL
et on va d'abord chercher si l'email existe dans la bd si elle existe
alors on vérifie le mdp si c bon on retourne un message 
*/

app.get('/authentification/:email/:password', function(req, res){
  client.connect(err => {
    const collection = client.db("Esiea").collection("Students")  
    console.log('Authentification request')
    var umail = req.params.email
        query = { email: umail }
        upwd = req.params.password
    
    collection.find(query).toArray(function(err, result){
        if (err) throw err
        if(result == null)
          result.send("Email not found!") //on retourne un message d'erreur
        else
          var dbpwd = result[0].password

        if(upwd == dbpwd)
            result.send("Successfully connected!")       
    })
  client.close();
});
})

//serveur ici pour le moment 
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
  
    console.log("App listening at http://%s:%s", host, port)
  
  })