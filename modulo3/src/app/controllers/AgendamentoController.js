import Agendamento from '../models/Agendamento'
import User from '../models/User'
import File from '../models/File'

import * as Yup from 'yup'
import { startOfHour, parseISO, isBefore } from 'date-fns'

class AgendamentoController {
  async index(req, res) {
    const { page = 1 } = req.query
    const agendamentos = await Agendamento.findAll({
      where: { user_id: req.user_id, canceled_at: null },
      order: ['date'],
      attributes: ['id', 'date'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    })
    return res.json(agendamentos)
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    })
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação' })
    }
    const { provider_id, date } = req.body
    // Verificar se provider é valido
    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    })
    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'Só pode agendar se passar um provider valido' })
    }
    // Antes de partir para criação do agendamente verificar se horario é valido
    const horaStart = startOfHour(parseISO(date))

    if (isBefore(horaStart, new Date())) {
      return res.status(400).json({
        error:
          'Não dá pra fazer agendamento no passado, informe uma data futura',
      })
    }
    // Checar disponibilidade de horário
    const agendaCheck = await Agendamento.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: horaStart,
      },
    })

    if (agendaCheck) {
      return res
        .status(400)
        .json({ error: 'Horário não está disponível para agendamento' })
    }

    // Criar o agendamento
    const agendamento = await Agendamento.create({
      provider_id,
      date: horaStart,
      user_id: req.user_id,
    })

    return res.json(agendamento)
  }
}

export default new AgendamentoController()
