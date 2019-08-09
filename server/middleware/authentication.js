const {verifyToken} = require('../helpers/generateToken')

function authentication(req,res,next){

    
    try {
        const {accessToken} = req.body
        console.log(accessToken)
        const decode = verifyToken(accessToken)
        
        req.decode = decode
        // console.log('masuk ke decode')
        next()
    }
    catch{
        console.log(req.headers.token)
        res.status(403).json({
            login : 'login failed',
            msg:req.headers.token
        })
       
    }
}

module.exports = authentication