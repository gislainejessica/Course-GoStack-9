## Introdução à manipulação dos modelos atraves dos controles (User)

### 1. **Criar controler**
Para trabalhar com as requisições relacionadas com manipulação da tabela de usuários
  ```js
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
  ```
---

### 2. **Criar rotas**
Para dar acesso as funcionalidades relacionadas aos usuários no arquivo `routes.js`

-   `routes.post('/users', UserController.store)`

---

__PONTOS IMPORTANTES DESSA FASE__

* Lembrar que a manipulação de banco de dados deve-se colocar em metodos __async__ e a cada chamada coloca-se um __await__.
* Verificar se determinada __coluna__ definida como __unica__, já não existe no banco, se sim retornar um erro indicando o que aconteceu.
* Só __retornar o que for necessário__ para quem tiver usando esse método.

---

### 3.  Gerando a hash de senha para o usuario

- O usuario vai passar uma senha qualquer e a aplicação vai codificar essa senha, antes de salvar no DB.

  Para isso vamos usar:  `yarn add bcryptjs`
- Dentro do modelo do usuario faremos as modificações
    `password: Sequelize.VIRTUAL,`
    um campo que não vai existir na banco só no código
