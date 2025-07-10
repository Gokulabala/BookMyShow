const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    // console.log("hello")
    try {
        
        const token = req.headers.authorization.split(' ')[1]
        // console.log(req.headers)
        const decoded = jwt.verify(token, process.env.jwt_secret)
        console.log(decoded)
        req.body.userId = decoded.userID
        next()
    } catch (error) {
        res.status(401).send({
            success: false,
            message : "Invalid token"
        })
    }
}