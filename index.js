const express = require('express')
const mongoose=require('mongoose')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 


mongoose
  .connect(
    'mongodb://localhost:27017/?directConnection=true'
    )
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err)
  })
