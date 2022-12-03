const model = require('../models/primary.model')
const onCreate = {message:"done creating a Profile"}

exports.primaryGetAll = (req,res)=>{
    const page = req.query.page
    const size = req.query.size
    const pageNo = (page-1)
    const size1 = parseInt(size)
    console.log(typeof size1)
    model.findAll({
        limit: size1,
        offset: pageNo 
    })
    .then(results =>{
        res.json(results)
    })
    .catch(err=>{
        console.log(err)
    })
    
};

exports.primaryGetById = (req,res)=>{
    const id = req.query.id
    model.findOne({
        where:{
            id:id
        }
    })
    .then(results=>{
        res.json(results)
    }).catch(err=>{
        console.log(err)
    })
}

exports.primaryPost = (req,res)=>{

    


    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const contact = req.body.contact;
    const sex = req.body.sex;
    const civilStatus = req.body.civilStatus;
    const soi = req.body.soi;
    const typeofhousehold = req.body.typeofhousehold;
    const ea = req.body.ea;
    const mh = req.body.mh;

    let status
    if(soi <= 5000){
        status = "Qualified"
    }else{
        status = "Not Qualified"
    }
    

    model.create({
        firstName:firstName,
        lastName:lastName,
        address:address,
        contact:contact,
        sex:sex,
        civilStatus:civilStatus,
        soi:soi,
        typeofhousehold:typeofhousehold,
        ea:ea,
        mh:mh,
        status:status
    })
    .then(result =>{
        res.json(onCreate)
    }).catch(err =>{
        console.log(err)
    })
};

exports.updatePrimary = (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const contact = req.body.contact;
    const sex = req.body.sex;
    const civilStatus = req.body.civilStatus;
    const soi = req.body.soi;
    const typeofhousehold = req.body.typeofhousehold;
    const ea = req.body.ea;
    const mh = req.body.mh;
    const id = req.query.id
    model.update({
        firstName:firstName,
        lastName:lastName,
        address:address,
        contact:contact,
        sex:sex,
        civilStatus:civilStatus,
        soi:soi,
        typeofhousehold:typeofhousehold,
        ea:ea,
        mh:mh
    },{
        where:{
            id: id
        }}
    ).then(result =>{
        res.send('updated')
    }).catch(err=>{
        console.log(err)
    })
}

