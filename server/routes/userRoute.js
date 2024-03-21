const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')
const authMiddleware = require('../middleware/authMiddleware')

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

//login Routes

router.post('/login' , async (req , res)=>{
    //checking email
    const user = await User.findOne({email : req.body.email})
    if(!user){
        return res.send({
            success : false,
            message : 'User does not exist'
        })
    }

    //checking password
    const validPassword = await bcrypt.compare(req.body.password , user.password)
    if(!validPassword){
        return res.send({
            success : false,
            message : 'Invalid Password'
        })
    }


    //generate token while user logged in
    const token = jwt.sign({userID : user._id}, process.env.jwt_secret, {expiresIn:"1d"})
    // console.log(token)
    

//everything is ok 
   res.send({
        success : true,
        message : 'User Logged in',
        data : token
        
    })
})


router.get('/get-current-user',authMiddleware, async (req , res)=>{
    try {
        const user = await User.findById(req.body.userId).select('-password')

        res.send({
            success : true,
            message : 'User details fetched Successfully',
            data : user
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
          });
    }
})

module.exports = router 