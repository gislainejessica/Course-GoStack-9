# Sucrase and Nodemon

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