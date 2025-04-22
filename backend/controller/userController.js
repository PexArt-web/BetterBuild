const registeruser = require("../Model/Auth/signupMethod")

const registerUser =async (req, res)=>{
    const { firstname , surname, email , phoneNumber, password } = req.body
    try {
     const user =   await registeruser(firstname, surname, email, phoneNumber, password)
     if(user){
        res.status(200).json({email: email})
     }
    } catch (error) {
        console.log(error.message)
        res.status(400).json({error: error.message})
    }

}

module.exports = { registerUser }