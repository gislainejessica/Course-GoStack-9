## Fazendo a ligação da Database da aplicação (models) com o banco Postgres
- Criar um `index.js` na pasta de database com o exemplo abaixo, quando for surgindo a necessidade de connectar a database a mais modelos é so adicionar nesse arquivo

  ```js
    import Sequelize from 'sequelize'
    import User from '../app/models/User'
    import DataConfig from '../config/database'
    // Todos os modelos ficarão nessa constante em array
    // Se precisar add mais modelos (const = models[User,Addresses, ..])
    const models = [User]

    class Database {
      constructor() {
        this.init()
      }

      init() {
        this.connection = new Sequelize(DataConfig)

        models.map(model => {
          model.init(this.connection)
        })
      }
    }
    export default new Database()
  ```
- Agora só importar no `app.js` e voialá conecção já está feita
  ```js
    import './database'
  ```
---
### **Issues**:

   Fiz uma pequena modificação na migration que eu tava criando a tabela, pois eu tinha colocado o nome errado numa coluna, então no teste percebi que as colunas do modelo, tinha que esta exatamente iguais a da migration. Para não progagar o erro no codigo, dei um migrate:undo e corrigi o nome da coluna
