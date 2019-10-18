## Criando nossa primeira migration
- No terminal podemos usar o *sequelize-cli* que já está instalado e rodar:
    `yarn sequelize migration:create --name=create-users`
  Dando esse comando ele já busca na pasta *database* onde a pasta de migrations e
  add no arquivo modelo (modificar o modedlo de acordo com as alterações a serem feitas)

- Para rodar a migration e verificar se deu certo
`yarn sequelize db:migrate`

- Para desfazer
`yarn sequelize db:migrate:undo`
`yarn sequelize db:migrate:undo:all`

- **Issues**: nessa etapa deu um erro na hora de rodar as migrations,
  não connectava pela aplicação, isso aconteceu porque como eu redirecionei a porta padrão do postgres pra uma outra porta da minha maquina, eu tinha que obrigatoriamente indicar essa porta no database.js. `port: 5532`
