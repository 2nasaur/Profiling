const express = require('express');
const router = express.Router();
const test = require('../controller/test.controller')
const primary = require('../controller/primary.controller')
const secondary = require('../controller/secondary.controller')
const dashboard = require('../controller/dashboard.controller')
const auth = require('../controller/auth.controller')

//for auth
const jwt = require('jsonwebtoken');
const secret = 'brgyr3g1strati0n';

function checkToken(req, res, next) {
    const token = req.cookies.jwt;
    try {
        const decoded = jwt.verify(token, secret);
        req.decoded = decoded;
        next();
    } catch (err) {
        // Invalid token, return an error
        res.status(401).json({ message: 'Unauthorized' });
    }
}

function checkRole(role) {
    return (req, res, next) => {
        if (req.decoded.role === role) {
            next();
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    }
}


router.get('/welcome',(req, res)=>{
    res.send('welcome');
})

router.get('/test',checkToken, checkRole('admin'),test.testing)
router.post('/test',test.postTesting)
router.patch('/test',test.updateTesting)


router.get('/allPrimary',primary.primaryGetAll)
router.post('/primary',primary.primaryPost)
router.patch('/primary',primary.updatePrimary)
router.get('/primary', primary.primaryGetById)
router.get('/search',primary.searchFilter)
router.delete('/primary',primary.deletePrimary)

router.get('/allSecondary',secondary.primaryGetAll)
router.post('/secondary',secondary.primaryPost)
router.patch('/secondary',secondary.updatePrimary)
router.delete('/secondary',secondary.deletePrimary)

router.get('/dashboard',checkToken, checkRole('admin'),dashboard.dashboard)

router.post('/auth',auth.postAuth)
router.get('/login',auth.login)


module.exports = router;