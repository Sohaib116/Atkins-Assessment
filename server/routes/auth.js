const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const config  =  require('../config')


router.post('/login', (req, res) => {
    //Mock user 
    const user  = {
        id : 1, 
        username : "Sohaib",
        email : "sohaib@test.com"
    }

    jwt.sign({ user }, config.SECRET_KEY, { expiresIn : '30 days'}, (err, token) =>{
        res.json({
            token 
        })
    })
})



module.exports = router