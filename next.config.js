// next.config.js
module.exports = {
  publicRuntimeConfig: {
    EMAIL_SERVICE_KEY: process.env.EMAIL_SERVICE_KEY,
    EMAIL_TEMPLATE_KEY: process.env.EMAIL_TEMPLATE_KEY,
    EMAIL_USER_KEY: process.env.EMAIL_USER_KEY,
  },
};
