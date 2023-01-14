const model = require('../models/secondary.model')
const onCreate = {message:"Family member has been added"}
const notExist = {message:"No relatioship"}
const onErr = {message:"Error, Please Try Again"}
const onUpdt = {message:"Family Member has been updated"}
const onDel = {message:"Entry has been Deleted"};


exports.primaryGetAll = (req,res)=>{
    const page = req.query.page
    const size = req.query.size
    const pageNo = (page-1)
    const size1 = parseInt(size)
    model.findAll({
        limit: size1,
        offset: pageNo 
    })
    .then(results =>{
        res.json(results)
    }).catch(err =>{
        res.json(onErr)
    })
    
};

exports.primaryPost = (req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const contact = req.body.contact;
    const sex = req.body.sex;
    const civilStatus = req.body.civilStatus;
    const soi = req.body.soi;
    const ea = req.body.ea;
    const mh = req.body.mh;
    const typeOfRelationship = req.body.rwto;
    const relationshipID = req.query.id;
    const tuborcolosis = req.body.tuborcolosis;
    const malnutrision = req.body.malnutrision;
    const pregnant = req.body.pregnant;
    const remarks = req.body.remarks;


    model.create({
        firstName:firstName,
        lastName:lastName,
        contact:contact,
        sex:sex,
        civilStatus:civilStatus,
        soi:soi,
        ea:ea,
        mh:mh,
        typeOfRelationship:typeOfRelationship,
        mainProfileId:relationshipID,
        tuborcolosis:tuborcolosis,
        malnutrision:malnutrision,
        pregnant:pregnant,
        remarks:remarks
    })
    .then(result =>{
        res.json(onCreate)
    }).catch(err =>{
        res.json(notExist)
    })
};

exports.updatePrimary = (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const contact = req.body.contact;
    const sex = req.body.sex;
    const civilStatus = req.body.civilStatus;
    const soi = req.body.soi;
    const ea = req.body.ea;
    const mh = req.body.mh;
    const typeOfRelationship = req.body.typeOfRelationship;
    const id = req.query.id
    const tuborcolosis = req.body.tuborcolosis;
    const malnutrision = req.body.malnutrision;
    const pregnant = req.body.pregnant;
    const remarks = req.body.remarks;


    model.update({
        firstName:firstName,
        lastName:lastName,
        contact:contact,
        sex:sex,
        civilStatus:civilStatus,
        soi:soi,
        ea:ea,
        mh:mh,
        typeOfRelationship:typeOfRelationship,
        tuborcolosis:tuborcolosis,
        malnutrision:malnutrision,
        pregnant:pregnant,
        remarks:remarks
    },{
        where:{
            id: id
        }}
    ).then(result =>{
        res.json(onUpdt)
    }).catch(err=>{
        res.json(onErr)
    })
}

exports.deletePrimary = (req,res) => {
    const id = req.query.id

    model.destroy({
        where:{
            id:id
        }
    }).then(result =>{
        res.json(onDel)
    }).catch(err=>{
        res.json(onErr)
    })
}
