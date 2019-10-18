// Configuração confidencial para acessar ao banco de dados
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'jessica',
  database: 'sql-banco',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
