const express = require('express');
const router = express.Router();
const test = require('../controller/test.controller')
const primary = require('../controller/primary.controller')
const secondary = require('../controller/secondary.controller')

router.get('/welcome',(req, res)=>{
    res.send('welcome');
})

router.get('/test',test.testing)
router.post('/test',test.postTesting)
router.patch('/test',test.updateTesting)


router.get('/allPrimary',primary.primaryGetAll)
router.post('/primary',primary.primaryPost)
router.patch('/primary',primary.updatePrimary)

router.get('/allSecondary',secondary.primaryGetAll)
router.post('/secondary',secondary.primaryPost)
router.patch('/secondary',secondary.updatePrimary)



module.exports = router;