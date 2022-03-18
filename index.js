const express = require('express')
const app = express()
require('dotenv').config()

const txt = {
  age1: 'txt1',
  age2: 'txt2',
  age3: 'txt3'
}

app.get('/api/txt', (req, res) => {
  res.send(txt)
})

app.get('/google', (req, res) => {
  fetch(
    'https://docs.googleapis.com/v1/documents/1I_QfeXP6uqdsySQOlYjgT55SRV6U4P4O9HIIrMbJ-MM'
  ).then(res => {
    console.log(res)
    return res.json()
  })
})

app.listen(process.env.PORT || 5000, () => {
  console.log('Rodando na porta 5000')
})
