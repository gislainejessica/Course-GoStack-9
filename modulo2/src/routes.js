import { Router } from 'express'

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ hello: 'oi' })
})

export default routes
