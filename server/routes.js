const express = require('express')
const mysql = require('mysql')
const connectDatabase = require('./database')
const router = express.Router()

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'finances'
})
  
db.connect((err) => {
  if (err) throw err
  console.log("⚡ Database conectado com sucesso")
})

router.get('/api/getItems', (err, res) => {
  let sqlSelect = 'SELECT * FROM items'

  db.query(sqlSelect, (err, results) => {
    if (err) throw err
    res.send(results)
  })
})

router.post('/api/setItem', (req, res) => {
  const { date, title, value, expense } = req.body
  let sqlInsert = 'INSERT INTO items (date, title, value, expense) VALUE (?, ?, ?, ?)'

  db.query(sqlInsert, [date, title, value, expense], (error, result) => {
    if (error) {
      console.log(error)
      res.status(500).send('Erro ao inserir item')
    } else {
      res.send('Item inserido com sucesso')
    }
  })
})

router.delete('/api/deleteItem/:id', (req, res) => {
  const itemId = req.params.id
  const sqlDelete = 'DELETE FROM items WHERE id = ?'

  db.query(sqlDelete, itemId, (error, result) => {
    if (error) {
      return res.send('Erro ao deletar item')
    } else {
      return res.send('Item deletado com sucesso')
    }
  })
})

router.put('/api/editItem/:id', (req, res) => {
  const itemId = req.params.id
  const { id, date, title, value, expense } = req.body
  const slqUpdate = `UPDATE items SET id=?, date=?, title=?, value=?, expense=? WHERE id=${itemId}`

  db.query(slqUpdate, [id, date, title, value, expense], (error, results) => {
    if (error) {
      console.log(error)
      res.status(500).send('Erro ao alterar o item!')
    } else {
      res.status(200).send('Item alterado com sucesso!')
    }
  })
})

module.exports = router