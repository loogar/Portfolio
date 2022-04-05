import { NextApiRequest, NextApiResponse } from 'next/types'

/* eslint-disable import/no-anonymous-default-export */
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SEND_GRID_ID)

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const body = JSON.parse(req.body)

	const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `

	const data = {
		to: 'ragoolkrishnan.ram@gmail.com',
		from: 'livedinme@gmail.com',
		subject: `New message from ${body.name}`,
		text: message,
		html: message.replace(/\r\n/g, '<br />'),
	}

	await mail.send(data)

	res.status(200).json({ status: 'OK' })
}
