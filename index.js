const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jiyeon:0503@cluster0.dtbd7.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true 
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('만득이는 쫀득쫀득해!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
