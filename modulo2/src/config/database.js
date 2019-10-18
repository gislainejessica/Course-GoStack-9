module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5532,
  username: 'postgres',
  password: '1234',
  database: 'dbteste',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
