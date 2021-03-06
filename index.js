const express = require('express')
const app = express()
require('dotenv').config()
const cors = require("cors")

const options = {
  origin: "http://localhost:3000"
}

app.use(express.static("../back/build"))

app.use(cors(options))

const txt = {
  age1: '<p>asdasd</p>',
  age2: 'txt2',
  age3: 'txt3'
}
app.get("/", (req, res) => {
  res.render("./build/index.html")
})

app.get('/api/txt', (req, res) => {
  res.send(txt)
})


app.listen(process.env.PORT || 999, () => {
  console.log('Rodando na porta 999')
})
