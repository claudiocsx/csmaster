const User = require('../models/User')

const router = require('express').Router()

router.get('/register', ( req, res ) => {
    const user = new User({
        username:'kkkk',
        email:'kkkkk@gmail.com',
        password:'123456'
    })


    user.save()
    res.send('ok')
})

module.exports = router