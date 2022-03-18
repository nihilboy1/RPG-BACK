const express = require('express')
const app = express()
require('dotenv').config()
const cors = require("cors")

const options = {
  origin: "http://localhost:3000"
}

app.use(cors(options))

const txt = {
  age1: '<iframe src="https://docs.google.com/document/d/e/2PACX-1vT3g_IURnIwEu_yg6B0h-w_gHZXV5qHlGp8mjMf7W-H6x3Eqw9ky_hMIal3Di9__UXpk7xR09UDumdJ/pub?embedded=true"></iframe>',
  age2: 'txt2',
  age3: 'txt3'
}

app.get('/api/txt', (req, res) => {
  res.send(txt)
})


app.listen(process.env.PORT || 5000, () => {
  console.log('Rodando na porta 5000')
})
