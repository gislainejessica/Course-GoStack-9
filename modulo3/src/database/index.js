// Carregar os models da aplicação e fazer a conexão com o banco de dados postgres criado ligado ao config database.js
import Sequelize from 'sequelize'
import User from '../app/models/User'
import DataConfig from '../config/database'

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
