const config = require("../config/index.js");
const twilio = require("twilio");
const client = twilio(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);

exports.sendSMS = async (mobileNo, message) => {
  try {
      const response = await client.messages.create({
          body: message,
          from: config.TWILIO_PHONE_NUMBER, // Your Twilio number
          to: mobileNo
      });

      console.log('Message sent successfully:', response.sid);
  } catch (error) {
      console.error('Error sending SMS:', error);
  }
};
