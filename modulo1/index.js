const express = require('express')
const server = express()

server.use(express.json())

const users = ['Gislaine','Jéssica','Nina','Pietro']

// Middlewares globais internas 
server.use((req, res, next) => {
  console.time('requisicao')
  console.log(`método: ${req.method}; url:${req.url}`)
  next()
  console.timeEnd('requisicao')
})
// Middleware em forma de função
function checkUserExists(req, res, next){
  if (!req.body.name){
    return res.status(400).json({error: "Nome de usuario obrigatorio"})
  }
  return next()
}

function checkUserInArray(req, res, next){
  if (!users[req.params.index]){
    return res.status(400).json({error: "Usuario não existe"})
  }
  return next()
}
// Rotas que iam ser expostas 
server.get('/users', (req, res) => {
  return res.json(users)
})

server.get('/users/:index', (req, res) => {
  const { index } = req.params
  return res.json(users[index])
})

server.post('/users', checkUserExists, (req, res) => {
  const { name } = req.body
  users.push(name)
  return res.json(users)
})

server.put('/users/:index', checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params
  const { name } = req.body
  users[index] = name
  return res.json(users)
})

server.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params.index
  users.splice(index,   1)
  res.send()
})

// Ouvindo a PORTA
server.listen(3000)
