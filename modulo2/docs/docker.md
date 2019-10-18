
# Docker
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

**Exemplo de Docker File (Receita pra app NodeJs)**

  ```js
    Partimos de uma imagem existente
    `FROM node:10`

    Definimos a pasta e copiamos o arquivos
    `WORKDIR /usr/app`
    `COPY . ./`

    Instalamos dependências
    `RUN yarn`

    Qual porta queremos expor?
    `EXPOSE 3333`

    Executamos nossa aplicação
    `CMD yarn start`
  ```
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

  `sudo docker run --name gobarber -e POSTGRES_PASSWORD=gobarber -p 5532:5432 -d postgres`

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
