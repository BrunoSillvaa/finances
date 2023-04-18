const express = require('express')
const cors = require('cors')
const routes = require('./routes.js')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/', routes)

app.listen(5000, () => {
  console.log("⚡ Server iniciado na porta 5000")
})