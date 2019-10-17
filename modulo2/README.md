- [x] Configurando estrutura            
- [x] Nodemon & Sucrase                 
- [x] Conceitos do Docker                
- [x] Configurando Docker                 
- [ ] Sequelize & MVC                   
- [ ] ESLint, Prettier & EditorConfig   
- [ ] Configurando Sequelize            
- [ ] Migration de usuário              
- [ ] Model de usuário                 
- [ ] Criando loader de models         
- [ ] Cadastro de usuários             
- [ ] Gerando hash da senha            
- [ ] Conceitos de JWT                 
- [ ] Autenticação JWT                 
- [ ] Middleware de autenticação       
- [ ] Update do usuário                
- [ ] Validando dados de entrada       

:white_check_mark: check-list 

Ver videos | Codar | Documentar
-----------|-------|-----------
:heavy_check_mark:| :clock10:|:clock10:

---
- install express

- criando app server e routes

- usando classes 

- rodando servidor

---
- sucrase and nodemon

  `yarn add sucrase nodemon -D`
  
  - O *sucrase* permite que se use a importação e exportação no formato mais novo:
  
    ```js 
        *import file from 'caminho' no lugar de #const file = require('caminho')
        *export default  em vez de #modules.exports 
    ```
  `yarn sucrase-node src/server.js` ou 
  
  criar um script no package.json: 
  
  `"scripts": {"dev":"nodemon src/server.js"}` 
  
  add o arquivo *nodemon.json* na raiz do projeto, com os seguinte conteúdo:
  
  `{"execMap": {"js": "node -r sucrase/register"}}`
  
  O sucrase vai afetar um pouco o processo de debugger:
  - Add mais um script:
  
    `"dev:debug": "nodemon --inspect src/server.js"`
  - Rodar 
  
    `yarn dev:debug`
  - Escolher a opção de debug do VScode:
    - Add no *launch.json*: 
    
      `"restart":true, "request": "attach"`

  Basicamente é uma questão de gosto, na hora de codar. 

  - O *nodemon* pra rodar o servidor sem precisa reiniciar a cada mudança de arquivo

---

## Docker
**Definicão**

Basicamente usamos o [Docker](https://www.docker.com): 
- Para a criação de ambientes isolados (container) que expõe portas para comunicação

**Conceitos** 
- *Imagem* é um serviço do Docker onde ferramentas, tecnolofias, são disponibilizadospara serem usadas.

- *Container* é uma instância da imagem.

- *Docker Registry* (Docker Hub)

  É onde fica todas as imagens do Docker, inclusive podemos criar e disponibilizar fora da nossa máquina uma imagem que criamos de uma aplicação.

- *Dockerfile* - É usado para montar uma imagem: 

  Podemos criar a nossa própria imagem de aplicação  em nodejs, por exemplo.
  - Resumindo o *Dockerfile* contem como se fosse a **Receita de uma imagem**;

### Exemplo de Docker File (Receita pra app NodeJs)
**Partimos de uma imagem existente**

`FROM node:10`

**Definimos a pasta e copiamos o arquivos**

`WORKDIR /usr/app`
`COPY . ./`

**Instalamos as dependências**

`RUN yarn`

**Qual porta queremos expor?**

`EXPOSE 3333`

**Executamos nossa aplicação**

`CMD yarn start`

---
## Instalando o Docker na máquina com uma imagem de banco Postgres 
Essa configuração permite que várias aplicações diferentes possam utilizar o mesmo banco
- 1 Instalar Docker na maquina [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/) 

  `docker -v` para verificar se instalação está ok.

- 2 Encontrar a imagem do Postgres no [Hub](https://hub.docker.com/_/postgres) para criar nosso container.
- 3 Criar uma instância com o comando:
  ex:
  
  `docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres`
  
  como eu criei minha instância:
  
  `sudo docker run --name sql-banco -e POSTGRES_PASSWORD=jessica -p 5532:5432 -d postgres:11`

  **-p 5432:5432** redirecionamento de portas `minha-porta:postgres-porta`

- 4 Rodar comando pra ver os conteiners que estão em execusão, verificar se o criado está na lista:

  - `sudo docker ps`. 

  Mostra as que estão em execução ou não: 
  
  - `sudo docker ps -a`

  caso ocorra algum erro:
  `sudo docker logs sql-banco`

  Se precisar : 
  - remover a imagem:
  
    ex : ` sudo docker rmi -f 19ddfdsc`
  
  - remover container 
  
    ex : `sudo docker rm -f 19dd89b0ae4e589f9b3f1a4bb35496c6`

**OBS: Na hora de colocar a porta no postBird, lembrar de colocar a porta que foi definida para a maquina, nesse caso _5532_**
- Criar uma base de dados para ser usada na aplicação
- Garantir que a postgres vai continuar sendo executada, mesmo que a maquina reinicie.
  - `sudo docker start sql-banco`
     

### Ferramentas
- [PostBird](https://snapcraft.io/postbird)

---

