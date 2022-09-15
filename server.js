const express = require('express')
const app = express()
const mongodb = require('./db/conect');
const port = 3000

app.use('/', require('./routes'))

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })