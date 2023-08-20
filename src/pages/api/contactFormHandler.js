import emailjs from '@emailjs/browser';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export default async function contactFormHandler(req) {
  let response;

  await emailjs
    .send(
      publicRuntimeConfig.EMAIL_SERVICE_KEY,
      publicRuntimeConfig.EMAIL_TEMPLATE_KEY,
      req,
      publicRuntimeConfig.EMAIL_USER_KEY,
    )
    .then(
      (result) => {
        response = { type: 'success', text: result.text };
      },
      (error) => {
        console.log(error);
        response = { type: 'error', text: error.text };
      },
    );

  return response;
}
