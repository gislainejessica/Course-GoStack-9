### Notificação para email

*Configurando o NodeMailer*

1) `yarn add nodemailer`
2) Dentro da pasta _config_ criar um arquivo `mail.js`

- Serviços de configuração de emails, exemplos para produção:
  - [*Amozon SES*](https://aws.amazon.com/pt/ses/)
  - [*Mailgun*](https://www.mailgun.com/smtp/)
  - [*Sparkpost*](https://www.sparkpost.com)
  - [*Mandril(Mailchimp)*](http://mandrill.com/)
  - Gmail tem limite (smtp limitado)

3) Vamos configurar para essa aplicação o ambiente para desenvolvimento, quando colocar a aplicação em produção tem que migrar para uma das opções acima
  - [MailTrap (Dev)](https://mailtrap.io)

4) Criar uma pasta lib na raiz do src onde algumas configurações adcionais, como envio de emails

5) Fazer o envio de email quando acontecer um cancelamento
