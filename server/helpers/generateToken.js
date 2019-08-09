const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

function generateToken(payload){

    return jwt.sign(payload, secret)
}


function verifyToken(token){

    const secret = 'TheChainBreaker'
    return jwt.verify(token,secret)

}

module.exports = {generateToken , verifyToken}


