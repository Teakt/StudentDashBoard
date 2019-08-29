const MongoClient = require('mongodb').MongoClient
      bcrypt = require('bcryptjs')
      uri = "mongodb+srv://ghaust:EW63BjZ6FFBv5L6X@web-project-nvcrn.mongodb.net/test?retryWrites=true&w=majority";
      
//let Student = require('./Student')
var express = require('express')
    app = express()

    app.use(function(req, response, next) {
        response.header("Access-Control-Allow-Origin", "*")
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        next()
      })

var server = app.listen(8081, "127.0.0.1",function () {
      host = server.address().address
      port = server.address().port
      console.log("\nStudentDashboard listening at http://%s:%s\n", host, port)
  })


/** Authentification URL Request */
app.get('/authentification/:email/:password', function(req, response){
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
          response.send(500) //Erreur serveur
        else{
          console.log("Email verification")
          var dbpwd = result[0].password
          console.log("Password verification")
          if(upwd == dbpwd)
              response.send(200) //Succès
          else
              response.send(403) // Accès refusé / Mot de passe incorrect
          }
    })
  client.close();
  });
})

/** GET All Grades URL Request */
app.get('/getAllGrades/:email', function(req, response){
  const client = new MongoClient(uri, { useNewUrlParser: true })
  client.connect(err => {
    const collection = client.db("Esiea").collection("Students")  
    var umail = req.params.email
        query = { email: umail }
    
    collection.find(query).toArray(function(err, result){
      if (err) throw err
      if(result.length < 1)
        response.send("Email not found!") //on retourne un message d'erreur response.send(
      else{
        console.log('Get All Grades of ' + result[0].f_name + " " + result[0].l_name)
        response.send(result[0].grades)
      }
    })
  client.close();
  });
})

/* Get Number Of Absences */
app.get('/getNumberOfAbs/:email', function(req, response){

  const client = new MongoClient(uri, { useNewUrlParser: true })
  client.connect(err => {
    const collection = client.db("Esiea").collection("Students")  
    var umail = req.params.email
        query = { email: umail }
    
    collection.find(query).toArray(function(err, result){
      if (err) throw err
      
      if(result.length < 1)
        response.send("Email not found!") //on retourne un message d'erreur 
      else{
        console.log('Get Number of Absences of ' + result[0].f_name + " " + result[0].l_name)
        response.send(''+ result[0].absence)
      }
    })
  client.close();
  });
})

/* Get Calendar Info
  Fichier JSON qui contient les diffférentes informations sur le calendrier de l'étudiant
  chaque étudiant a un object de type Calendar qui correspond à son edt / format json
  La partie qui nous intéresse est le Vevent qui contient tous les événements de la semaine
*/

app.get('/getCalendar/:email', function(req, response){
    const client = new MongoClient(uri, {useNewUrlParser: true})
    client.connect(err => {
          const collection = client.db("Esiea").collection("Students")
          var umail = req.params.email
              query = {email: umail}

          collection.find(query).toArray(function(err, result){
              if (err) throw err;
          if(result.length < 1)
              response.send("Something's wrong with the ID/email")
          else{
              console.log("Get Calendar Informations")

          }
          })
    })
})