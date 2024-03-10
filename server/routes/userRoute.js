const router = require('express').Router()
const bcrypt = require('bcryptjs')

const User = require('../models/userModel')

// register a user

router.post('/register', async (req, res)=>{
    try {
        
        const userExists = await User.findOne({email:req.body.email})
        
        if(userExists){
            return res.send({
                success : false,
                message : 'User Already Exists'
            })
        }

        //hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword

        const newUser = new User(req.body)
        await newUser.save()

        res.send({
            success: true, message: "Registration Successful, Please Login"
        })

    } catch (error) {
        console.log(error)
    }
})

module.exports = router 