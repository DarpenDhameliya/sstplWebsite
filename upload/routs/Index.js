const router = require('express').Router();

router.use('/authers',require('./SendMail'))
router.use('/contactus' , require('./Contackform'))
router.use('/hire' , require('./Hireus'))
module.exports = router