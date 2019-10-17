const { Router } = require('express')

routes = new Router()

routes.get('/', (req, res)=>{
  return res.json({hello: "oi"})
})

module.exports = routes