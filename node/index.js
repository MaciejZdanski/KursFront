const express = require('express')
const app = express()
const path = require('path')

// KONFIGURACJA STATYCZNEGO FOLDERU
app.use(express.static(path.join(__dirname, '/src/static')))

// POBIERANIE INFORMACJI OD KLIENTA
app.post('/sendForm', (req, res) => {
  console.log(req.query)
  res.send("ok")
})

// WYSYŁANIE KOMENTARZY Z SERWERA DO KLIENTA
app.get('/getComments', (req, res) => {
  
  res.send("ok")
})

app.listen(80)