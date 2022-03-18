const express = require('express')
const app = express()
require('dotenv').config()
const cors = require("cors")

const options = {
  origin: "http://localhost:3000"
}

app.use(cors(options))

const txt = {
  age1: 'txt122222222222222222222222222',
  age2: 'txt2',
  age3: 'txt3'
}

app.get('/api/txt', (req, res) => {
  res.send(txt)
})


app.listen(process.env.PORT || 5000, () => {
  console.log('Rodando na porta 5000')
})
