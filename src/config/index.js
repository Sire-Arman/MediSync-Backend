require("dotenv").config();

const config = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  CLIENT_URL: process.env.CLIENT_URL,
  TWILIO_ACCOUNT_SID:process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN:process.env.TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER:process.env.TWILIO_PHONE_NUMBER,
  SMS_API_KEY: process.env.SMS_API_KEY,
  SMS_SENDER_ID: process.env.SMS_SENDER_ID,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: process.env.MAIL_PORT,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASS: process.env.MAIL_PASS,
  EMAIL_TO: process.env.EMAIL_TO,
};

module.exports = config;
