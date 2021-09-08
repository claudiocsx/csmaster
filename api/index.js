const { Router } = require('express')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
  })
   


app.listen(8800, ()=>{
    console.log('servido rdando')
})