import { sendEmail } from '../../utils/sendEmail'

export default async (req, res) => {
  if (req.method === 'POST') {
    if (req.body._honeypot) {
      res.status(404).json({
        error: {
          code: 'not_allowed',
          message: 'Yeah, no.',
        },
      })
    }

    const sent = await sendEmail(req.body)
    if (sent && sent.Message === 'OK') {
      return res.status(200).end()
    } else {
      return res.status(404).json({
        error: {
          code: sent.ErrorCode,
          message: sent.Message,
        },
      })
    }
  }
  return res.status(404).json({
    error: {
      code: 'not_found',
      messgae: "The requested endpoint was not found or doesn't support this method.",
    },
  })
}
