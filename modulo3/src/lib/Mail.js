import nodemailer from 'nodemailer'
import configMail from '../config/mail'

class Mail {
  constructor() {
    const { host, secure, port, auth } = configMail
    this.tranporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth : null,
    })
  }

  sendMail(message) {
    return this.tranporter.sendMail({
      ...configMail.default,
      ...message,
    })
  }
}
export default new Mail()
