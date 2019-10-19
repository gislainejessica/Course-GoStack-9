import { Router } from 'express'
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import authMidlle from './app/middlewares/auth'

const routes = new Router()

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)
// Middleware global, mas que só será aplicado as rotas que seguem
routes.use(authMidlle)
routes.put('/users', UserController.update)

export default routes
