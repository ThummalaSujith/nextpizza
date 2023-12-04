// src/app/components/MailchimpForm.js
import React from 'react';

const MailchimpForm = () => {
  return (
    <div>
      <form action={`https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`} method="post">
        <input type="email" name="EMAIL" placeholder="Your email" />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  );
};

export default MailchimpForm;

