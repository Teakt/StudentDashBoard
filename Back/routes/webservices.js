const MongoClient = require('mongodb').MongoClient
      bcrypt = require('bcryptjs')
      uri = "mongodb+srv://ghaust:EW63BjZ6FFBv5L6X@web-project-nvcrn.mongodb.net/test?retryWrites=true&w=majority";
      
//let Student = require('./Student')
var express = require('express')
    app = express()

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        next()
      })

var server = app.listen(8081, "127.0.0.1",function () {
      host = server.address().address
      port = server.address().port
      console.log("\nStudentDashboard listening at http://%s:%s\n", host, port)
  })

/* Première route /authentification
On récupère un email et un mdp dans l'URL
et on va d'abord chercher si l'email existe dans la bd si elle existe
alors on vérifie le mdp si c bon on retourne un message 
*/

app.get('/authentification/:email/:password', function(req, res){
  const client = new MongoClient(uri, { useNewUrlParser: true })
  client.connect(err => {
    const collection = client.db("Esiea").collection("Students")  
    console.log('Authentification request')
    var umail = req.params.email
        query = { email: umail }
        upwd = req.params.password
    //Code d'erreur à la place du texte
  
    collection.find(query).toArray(function(err, result){
        if (err) throw err
        if(result.length < 1)
          res.send("Email not found!") //on retourne un message d'erreur res.send(
        else{
          console.log("Email verification")
          var dbpwd = result[0].password
          console.log("Password verification")
          if(upwd == dbpwd)
              res.send("Successfully connected!")
          else
              res.send("Wrong password")
          }
    })
  client.close();
});
})
