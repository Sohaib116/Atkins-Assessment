const jwt = require('jsonwebtoken')
const config  =  require('../config');


module.exports = function (req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization']
    //check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){

        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        const token = bearerToken

        if(!token) return req.status(401).send('Access Denied')

        try{
            const verified =  jwt.verify(token, config.SECRET_KEY)
            req.user = verified
            next()
        }
        catch(err){
            res.status(400).send('Invalid Token')
        }
    }
    else{
        return res.status(401).send('Access Denied')
    }
}