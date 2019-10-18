# Sequelize
- ORM pra NodeJs usado para bancos relacionais (mysql, postegres, sqlite)
- ORM é uma forma de abstrair um BD
  - Basicamente é mudar a forma como a aplicação se comunica com o BD

No modelo MVC as tabelas representa o Model 
- Migrations: controla as versões do banco de dados
    - Cada arquivo de migration contem informações de criação, alteração e exclusão de tabelas e colunas
    - Cada nova ação no banco de dados tem uma migração (datas definem as ordem das migrations)
    - NÃO EDITÁVEL, depois que passou pra frente ou foi pra produção, já era, esquece edição.
    - Só meche em uma tabela
    - Em ambiente de desenvolvimento, pode-se usar o rollback e para fazer alguma modificaçãona migration e depois executar a mesma migration novamente, mas passou pra outro ambiente, Tem que criar do zero, se precisar fazer algo a mais.

- Seeds: popula a base de dados com dados fakes, dados pra testes (DEV)
  - Gerado por código
  - NUNCA em Produção, na produção dados só podem ser criados na migrations.

- Model: Representação do modelo: geralmente representa o banco de dados
- View: Retorno ao cliente
- Controller: Regras de negocio => 
  - De preferência uma classe
  - Não chama outro controller ou metodo (Tem que ser auto suficiente), 
  - Retorna json, 
  - No maximo 5 metodos (index, show, store, update, delete) 
  