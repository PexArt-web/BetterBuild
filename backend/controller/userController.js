const registeruser = require("../Model/Auth/signupMethod")

const registerUser =async (req, res)=>{
    const { firstname , surname, password, email, phoneNumber } = req.body
    try {
     const user =   await registeruser(firstname, surname, email, phoneNumber, password)
     if(user){
        res.status(200).json({email: email})
     }
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = { registerUser }