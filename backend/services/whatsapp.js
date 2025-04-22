const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
const WHATSAPP_VERSION = process.env.WHATSAPP_API_VERSION;
const {log} = console;


const API_URL = `https://graph.facebook.com/${WHATSAPP_VERSION}/${PHONE_NUMBER_ID}/messages`;

const whatsappService = async (firstname, surname, phoneNumber) => {
  if (!firstname || !surname || !phoneNumber) {
    throw new Error("All fields are required");
  }
  const message = `Hello ${firstname} ${surname}, you don login successfully!`;
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: phoneNumber,
        type: "text",
        text: { body: message },
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Error: ${data.error.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    throw error;
  }
};

module.exports = whatsappService;
