const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

const txt = {
  age1: 'txt1',
  age2: 'txt2',
  age3: 'txt3'
}

app.get('/api/txt', (req, res) => {
  res.send(txt)
})

if (process.env.NODE_ENV != 'development') {
  app.use(express.static('../front/build'))
  app.get('*', (req, res) => {
    res.sendFile('../front/build/index.html', error => {
      if (error) {
        res.status(500).send(error)
      }
    })
  })
}

app.listen(999, () => {
  console.log('Rodando na porta 999')
})