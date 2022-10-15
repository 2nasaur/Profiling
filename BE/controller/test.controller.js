const testmodel = require('../models/test.model')


exports.testing = (req,res)=>{
    testmodel.findAll()
    .then(results =>{
        res.json(results)
    })
    
}

exports.postTesting = (req,res)=>{
    const name = req.body.name;
    const gender = req.body.gender
    testmodel.create({
        name : name,
        gender: gender
    })
    .then(result =>{
        console.log(result)
    }).catch(err =>{
        console.log(err)
    })
}