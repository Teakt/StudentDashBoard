const mongoose = require('mongoose')
      studentSchema = require('./database/studentSchema.js')
mongoose.connect('mongodb+srv://ghaust:EW63BjZ6FFBv5L6X@web-project-nvcrn.mongodb.net/test?retryWrites=true&w=majority', function(err){
    if (err) throw err
})
const Student = mongoose.model('Student', studentSchema, 'Esiea')

var firstStud = new Student()
firstStud.email = "escoabar@et.esiea.fr"
firstStud.password = "xxx0129"
firstStud.creationDate = Date.now()
firstStud.f_name = "Ignazio"
firstStud.l_name = "Escobar"
firstStud.birthdate = "16/05/1997"
firstStud.address = "89 rue de Sousse, 75001 Paris"
firstStud.grades = [{
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
    }
    }],
firstStud.absence = 3

firstStud.save(function(err){
    if(err) throw err
    console.log("New Student added")
    mongoose.connection.close()
})