const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

const app = express()

dotenv.config()

mongoose.connect(process.env.MONGO_URL, 
  {useNewUrlParser: true, useUniFiedTopology: true},
  () => {
  console.log('mongo rodando')
}
)

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)


   


app.listen(8800, ()=>{
    console.log('servido rdando')
})