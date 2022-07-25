const express = require('express')
const router = express.Router()

const verify = require('./verifyToken')

router.post('/2', verify , (req, res) => {
    res.json({
        message : "test message created...."
    })
})

module.exports = router