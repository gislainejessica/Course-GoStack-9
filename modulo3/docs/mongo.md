### Configurando ambiente para o banco de dados MongoDB
1) Criar um container no docker (servidor) criar uma intancia para trabalhos com uma base de dados MongoDB
  - `sudo docker run --name mongodbbarber -p 27017:27017 -d -t mongo`
2) Instalar o mongoose
  - `yarn add mongoose`
3) Configuaração tambem será feita no `index.js` da pasta _database_
  - Add o metodo como abaixo:

  ```js
      mongo() {
      this.connection = mongoose.connect('mongodb://localhost:27017/teste', {
        useNewUrlParser: true,
        useFindAndModify: true,
      })
    }
  ```
Já tá conectado no banco

---

