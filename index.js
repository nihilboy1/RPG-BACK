const express = require('express')
const app = express()
require('dotenv').config()
const cors = require("cors")
import textos from "./textos/textos"

const options = {
  origin: "http://localhost:3000"
}

app.use(cors(options))


app.get('/api/txt', (req, res) => {
  res.send(textos)
})


app.listen(process.env.PORT || 5000, () => {
  console.log('Rodando na porta 5000')
})
