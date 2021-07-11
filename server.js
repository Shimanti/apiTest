const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('dotenv').config()

// Setup Database
mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database"))

// Setup app to use json - let's server accept json
app.use(express.json())

// Setup Router
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log("Server started"))
