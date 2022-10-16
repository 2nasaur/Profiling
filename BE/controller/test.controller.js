const testmodel = require('../models/test.model')


exports.testing = (req,res)=>{
    const page = req.body.page
    const size = req.body.size
    const pageNo = (page-1)
    testmodel.findAll({
        limit: size,
        offset: pageNo 
    })
    .then(results =>{
        res.json(results)
    })
    
};

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
};

exports.updateTesting = (req,res) => {
    const name = req.body.name;
    const gender = req.body.gender
    const id = req.query.id
    testmodel.update({
        name : name,
        gender: gender},{
        where:{
            id: id
        }}
    ).then(result =>{
        res.send('updated')
    }).catch(err=>{
        console.log(err)
    })
}

