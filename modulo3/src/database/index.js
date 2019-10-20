// Carregar os models da aplicação e fazer a conexão com o banco de dados postgres criado ligado ao config database.js
import Sequelize from 'sequelize'

import User from '../app/models/User'
import File from '../app/models/File'
import Agendamento from '../app/models/Agendamento'

import DataConfig from '../config/database'

const models = [User, File, Agendamento]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(DataConfig)
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}
export default new Database()
