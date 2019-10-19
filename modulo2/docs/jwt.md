# Conceitos Basicos de jwt
- Sessões que retornan um TOKEN ( Headers, Payload, Assinatura ). __Assinatura__, é o modo de segurança do token, que vai garantir que o TOKEN não foi alterado no meio do caminho.

- O Token contem informações imbutidas no codigo como: Qual o tipo de token, algoritmo e alguns dados do usuario da sessão.

---
Como processeder para gerar o TOKEN:

- Instalar a biblioteca que vai ajudar a gerar o token

  `yarn add jsonwebtoken`

- Criar no modelo `User.js` um metodo para comparar a senha passada com a senha hash armazenada

- Criar um controller para lidar com a sessão

- Criar uma rota de sessões

- Criar um arquivo de confifuração para guarda dados de auth.js na pasta config

## **LINKS úteis**
[md5online](https://www.md5online.org)

---

### Bloquear usuario em rotas que ele não pode acessar se não tiver logado ou não tem autorização
