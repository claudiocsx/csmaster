 const router = require('express').Router()

 router.get('/', ( req, res ) => {
     res.send('claudio')
 })

 module.exports = router