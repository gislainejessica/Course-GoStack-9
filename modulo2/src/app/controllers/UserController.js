import User from '../models/User'

class UserController {
  async store(req, res) {
    // Verificar se usuario existe
    const userExists = await User.findOne({ where: { email: req.body.email } })
    if (userExists) {
      return res.status(400).json({ error: 'email já está cadastrado' })
    }
    const { id, provider, name, email } = await User.create(req.body)
    // Retornar apenas os dados necessarios para o frontend
    return res.json({
      id,
      name,
      email,
      provider,
    })
  }
}

export default new UserController()
