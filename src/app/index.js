// pages/api/subscribe.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const response = await axios.post(
        'https://<YOUR_MAILCHIMP_API_SERVER>.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members',
        {
          email_address: email,
          status: 'subscribed',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer YOUR_MAILCHIMP_API_KEY`,
          },
        }
      );

      res.status(200).json({ success: true, response: response.data });
    } catch (error) {
      console.error('Mailchimp subscription error:', error);
      res.status(500).json({ success: false, error: 'Error subscribing to Mailchimp' });
    }
  } else {
    res.status(405).end();
  }
}

