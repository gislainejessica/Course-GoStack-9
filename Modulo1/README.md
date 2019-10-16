# Modulo 1 GoStack 9

## Aprendendo conceitos básicos de NodeJs

### DO INÍCIO AO FIM

### **NodeJs NVM e Yarn**

1 -  Instalar [NodeJs](https://nodejs.org/en/), de preferência a versão LTS.

2 - Recomendado usar o [nvm](https://github.com/nvm-sh/nvm) pra instalar o *NodeJs*, em vez de fazer o download. Pois isso facilita fazer atualizações e remover o *NodeJs* deixando menos resquísios no sistema. 
  ` nvm install 10.16.3 ` e voilà o *NodeJs* já tá pronto pra uso. 
  
  Colocar essa versão como default no sistema é simples,basta rodamos o seguinte comando: ` nvm alias default 10.16.3`, isso ás vezes é necessário, pois podemos ter mais de uma versão do nodejs rodando na mesma maquina.

  Agora se rodar: `node -v` dá pra ver a versão do nodeJs instalada e o npm que é usado para instalar dependências de terceiros no projeto, se rodar `npm -v` já vemos a versão do **npm** que tá rodando na máquina com a *versão 6.11.3*.

3 - Intalar o [yarn](https://yarnpkg.com/lang/en/) para fazer o gerenciamento de pacotes de terceiros. O *yarn* tem uma performace um pouquinho melhor de modo geral e tem algumas ferramentas mais avançadas. 

Agora só rodar um ` yarn -v ` pra conferir se o *yarn* foi instalado direitinho.

### **Introdução ao NodeJs**
"Javascript no Back-end"

NodeJs é uma **Plataforma** para desenvolvimento em back-end e não uma linguaguem.
- Principais *características* do NodeJs
  - **Callstack** (Pilha que vai armazenar as funções, para armazenar quando der)
  - **Event Loop** (Vai ficar escutando os eventos )
  - **Single Thread** (C++ por baixo dos panos faz multi)
  - **Non block io** (Não bloqueia entrada e saida, recebe o pedido e quando recebe a resposta manda de volta, mas não fica segurando recurso nesse meio tempo)
- Exemplos de *Frameworks* usado no NodeJs
  - [Express](https://expressjs.com/pt-br/)
  - [AdonisJs](https://adonisjs.com)
  - [NestJs](https://nestjs.com)

- Outras bibliotecas / frameworks / ferramentas
  - [Nodemon](https://www.npmjs.com/package/nodemon)

- Softwares de Apoio
  - [Insomia](https://insomnia.rest) para testar as rotas criadas

---
Comandos pra iniciar o projeto NodeJs do zero:

- Criar uma pasta 

  `mkdir modulo-1`
- Iniciar um projeto vazio em NodeJs

  `yarn init`
- Adicionar dependências ao projeto
  
  `yarn add express`

  Express vai ser usado principalmente para criação e manipulação das rotas do backend.

  `yarn add nodemon -D`

  Nodemon aqui é mais pra não ter o trabalho de ter que ficar reiniciando o servidor a cada mudança. 
    - Criar um script, no *package.json* para executar nodemon
    ```js
    "scripts": {
      "dev":"nodemon index.js"  
    },
    ```

`touch index.js`

---
- Como a informação é tranmitida numa Api Rest

| Query Params | Route Params  | Request Body
|------------- | --------------|-------------
|**?** nome=**query**|users/**1**|**{**"name":"Jessica"**}**

---

1) CRUD

index.js é um arquivo que contém as rotas que estarão expostas na api, então dentro desse arquivo nos teremos o CRUD implimentado.

| Create | Read | Update | Delete
| ------ | ---- | ------ | ------
| Post   | Get  |  Put   |  Delete
| server.post() | server.get() | server.put() | server.delete()

---

2) MidlleWares
  
  São formas de manipular as informação que estão na requisição e retornar ou não respostas para o usuário

  - Global

  `server.use('Algum middleware aqui dentro (req, res, next)=>{}')`

  - Local
  
  `server.get('user', middlewere(req, res)=>{})`

- Debugar usando debug do vscode
  - breakpoint
  - multiplos breakpoints
  - launch file
  -  observando variavel no debug