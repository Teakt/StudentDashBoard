const mongoose = require('mongoose')
      studentSchema = new mongoose.Schema({
            email: {
                type: String,
                lowercase: true
            },
            password: String,
            creationDate: Date,
            f_name: String,
            l_name: String,
            birthdate: String,
            address: String,
            grades: {String:{String:Number}},
            absence: Number
      })

module.exports = studentSchema