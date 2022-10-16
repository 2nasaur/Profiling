const express = require('express');
const router = express.Router();
const test = require('../controller/test.controller')

router.get('/welcome',(req, res)=>{
    res.send('welcome');
})

router.get('/test',test.testing)
router.post('/test',test.postTesting)
router.patch('/test',test.updateTesting)
module.exports = router;