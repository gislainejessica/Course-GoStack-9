- [x] Configurando estrutura            
- [x] Nodemon & Sucrase                 
- [ ] Conceitos do Docker                
- [ ] Configurando Docker                 
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

