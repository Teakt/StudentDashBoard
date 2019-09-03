const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://ghaust:EW63BjZ6FFBv5L6X@web-project-nvcrn.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true })
let Student = require('./Student')

//Système de tags 
client.connect(err => {
  const collection = client.db("Esiea").collection("Students");
  var obj = [
    new Student('Yusuf', 'Doe', 'ydoe@et.esiea.fr', 'information system', "01/01/1960", "XXX", 
    {
      "Technical Common Core":{
          "Estimation and Data Analysis": 10,
          "Numerical and combinatorial optimization":15,
          "IP Networks":16,
          "Cryptography":12,
          "PST":0,
          "Virtual Reality":12,
          "System programming and real time":13,
          "Digital Imaging":15
      },
      "Core Program":{
          "Business Culture - Management and Law":15, 
          "Business Culture - Sustainable Development and Business Plan": 12,
          "Project Management": 16,
          "Seminar": 18,
          "Relationship Dynamics": 10,
          "English - New Technology and TOEIC": 20,
          "APIC (Actions to Promote Information and Communication) Optional": 19,
          "2nd foreign language, French for foreigners, reinforced English Optional":20
      }, 
      "Elective Program":{
          "Web Development": 19, 
          "Mobile Development": 20, 
          "Database Management Systems":19,
          "Datamining and applications":16,
          "Introduction to reverse engineering":18,
          "Software Architecture":7,
          "Neural Networks":20,
          "Distributed Programming":10
      }}, 9, 'azerty09')]
   /* new Student('Joseph-Emmanuel', 'Banzio', 'banzio@et.esiea.fr', 'information system', "20/04/1998", "89 rue de Villiers, 92200 Neuilly-sur-Seine",{ android: 19,
      cryptography: 18,
      data_science: 20,
      statistics: 10,
      stm32_microprocessor: 13}, 10, bcrypt.hashSync("zoblazo09", 15)),
    new Student('Robert', 'Bui', 'rbui@et.esiea.fr', 'information system', "01/02/1920", "rue du xxx", { android: 19,
      cryptography: 19,
      data_science: 18,
      statistics: 20,
      stm32_microprocessor: 17}, 0, bcrypt.hashSync("zèezçeàze!", 15))*/
  
  collection.insertMany(obj, function(err, res){
      if (err) throw err
      console.log("Number of documents inserted : " + res.insertedCount)
      //console.log("Element inserted " + obj)
  })
  
  client.close();
});

console.log('Successfully connected to the test db.')
