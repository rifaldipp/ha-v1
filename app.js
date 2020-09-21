const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const ejs = require('ejs')

// HEROKU
var static = require('node-static');
var file = new static.Server('index');


//Join public folder
app.use(express.static(path.join(__dirname,'public')))


// Load views engine
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//Routers
app.get('/', (req, res) => {
  res.render('index')
})




//Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})