const MongoClient = require('mongodb').MongoClient
const bcrypt = require('bcryptjs')
const uri = "mongodb+srv://ghaust:EW63BjZ6FFBv5L6X@web-project-nvcrn.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true })
let Student = require('./Student')

client.connect(err => {
  const collection = client.db("Esiea").collection("Students");
  var obj = [
      //constructor(f_name, l_name, email, sector, birthdate, address, grades, absence, password)
    new Student('Guillaume', 'Teak', 'teak@et.esiea.fr', 'information system', "01/01/1960", "XXX", 
    { android: 15,
      cryptography: 16,
      data_science: 12,
      statistics: 0,
      stm32_microprocessor: 15}, 8, bcrypt.hashSync("ktuzbdzbakd191-Z9", 15)),
    new Student('Joseph-Emmanuel', 'Banzio', 'banzio@et.esiea.fr', 'information system', "20/04/1998", "89 rue de Villiers, 92200 Neuilly-sur-Seine",{ android: 19,
      cryptography: 18,
      data_science: 20,
      statistics: 10,
      stm32_microprocessor: 13}, 10, bcrypt.hashSync("zoblazo09", 15)),
    new Student('Robert', 'Bui', 'rbui@et.esiea.fr', 'information system', "01/02/1920", "rue du xxx", { android: 19,
      cryptography: 19,
      data_science: 18,
      statistics: 20,
      stm32_microprocessor: 17}, 0, bcrypt.hashSync("zèezçeàze!", 15))
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
