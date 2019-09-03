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

module.exports = app