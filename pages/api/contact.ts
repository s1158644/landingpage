import { mailOptions, transporter } from '@/lib/nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages: ' + success);
  }
});

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data.name || !data.email) {
      return res.status(400).json({ name: 'Bad request' });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `New contact from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}`,
        html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Company: ${data.company}</p>`,
      });
      return res.status(200).json({ name: 'Success' });
    } catch (error: any) {
      console.log('error: ', error.message);
      return res.status(500).json({ name: error.message });
    }
  }
  return res.status(400).json({ name: 'Bad request' });
};

export default handler;
