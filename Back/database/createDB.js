const MongoClient = require('mongodb').MongoClient
const bcrypt = require('bcryptjs')
const uri = "mongodb+srv://ghaust:EW63BjZ6FFBv5L6X@web-project-nvcrn.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true })
let Student = require('./Student')

client.connect(err => {
  const collection = client.db("Esiea").collection("Students");
  var obj = [
      //constructor(f_name, l_name, email, sector, birthdate, address, grades, absence, password)
    new Student('Guillaume', 'Teak', 'teak@et.esiea.fr', 'information system', "01/01/1960", "XXX", [15, 20, 16, 9, 8], 8, bcrypt.hashSync("ktuzbdzbakd191-Z9", 15)),
    new Student('Joseph-Emmanuel', 'Banzio', 'banzio@et.esiea.fr', 'information system', "20/04/1998", "89 rue de Villiers, 92200 Neuilly-sur-Seine", [12, 17, 19, 20, 15], 10, bcrypt.hashSync("zoblazo09", 15)),
    new Student('Robert', 'Bui', 'rbui@et.esiea.fr', 'information system', "01/02/1920", "rue du xxx", [20, 14, 19, 18, 16], 0, bcrypt.hashSync("zèezçeàze!", 15))
  ];
  collection.insertMany(obj, function(err, res){
      if (err) throw err
      console.log("Number of documents inserted : " + res.insertedCount)
      //console.log("Element inserted " + obj)
  })
  // perform actions on the collection object
  client.close();
});

console.log('Successfully connected to the test db.')
