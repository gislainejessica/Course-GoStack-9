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
  - Express
  - AdonisJs
  - NestJs
