const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send()
})

app.post('/users', (req, res) => {
  dados = req.body
  res.status(200).send('Requisiçao POST recebida com sucesso')
})

app.listen(3000, () => {
  console.log('⚡ Servidor rodando na porta 3000')
})