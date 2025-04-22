const whatsappService = require("../../services/whatsapp")

const registeruser = async (firstname, surname, email, phoneNumber, password) =>{
    try {
        if(!firstname || !surname || !email || !phoneNumber || !password ){
            throw Error("All fields are required")
        }
        const notifyUser = await whatsappService(firstname, surname, phoneNumber)
        if(!notifyUser) {
            throw Error("Error sending WhatsApp message")
        }
        return notifyUser
    } catch (error) {
        throw error
    }
}

module.exports = registeruser