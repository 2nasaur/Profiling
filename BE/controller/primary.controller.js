const model = require('../models/primary.model')
const onCreate = {message:"done creating a Profile"}
const onUpdate = {message:"done Updating a Profile"}
const Sequelize = require('sequelize');
const secondary = require('../models/secondary.model');
const onDel = {message:"Entry has been Deleted"};
const onErr = {message:"Error, Try Again"};

exports.primaryGetAll = (req,res)=>{
    const page = req.query.page
    const size = req.query.size
    const pageNo = (page-1)
    const size1 = parseInt(size)
    const params1 = req.query.search
    const Op = Sequelize.Op;

    let params
    if(params1 == '')
    params = true
    else
    params == false

    if (params == true)
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
    else
        model.findAll({
            limit: size1,
            offset: pageNo,
            where:{
                [Op.or]:[
                    {
                        firstName:{
                            [Op.like]:`%${params1}%`
                        }
                    },
                    {
                        lastName:{
                            [Op.like]:`%${params1}%`
                        }
                    },
                    {
                        address:{
                            [Op.like]:`%${params1}%`
                        }
                    },
                    {
                        status:params1
                        }
                    
                ]
            }
        })
        .then(results =>{
            res.json(results)
        })
        .catch(err=>{
            console.log(err)
        })
    
};
exports.searchFilter = (req,res)=>{
    const Op = Sequelize.Op;
    const page = req.query.page
    const size = req.query.size
    const sex1 = req.query.sex
    const firstName1 = req.query.firstName
    const lastName1 = req.query.lastName
    const pageNo = (page-1)
    const size1 = parseInt(size)
    const start1 = req.query.start
    const end1 = req.query.end

    let start
    if(start1 === '')
        start = `0001-01-01 00:00:00`
    else
    start = `${start1}`

    let end
    if(end1 === '')
        end = `9999-12-12 00:00:00`
    else
    end = `${end1}`

    let sex
    if(sex1 === '')
        sex = false
    else
        sex = true
    
        let firstName
    if(firstName1 === '')
    firstName = false
    else
    firstName = true
    
    let lastName
    if(lastName1 === '')
    lastName = false
    else
    lastName = true
    
    

    //all are true
    if(sex == true & firstName == true & lastName == true){
        model.findAll({
            limit: size1,
            offset: pageNo,
            where:{
                [Op.or]:[{sex:sex1},{firstName:firstName1},{lastName:lastName1}],
                createdAt:{
                    [Op.between]:[start,end]
                }

                
            } 
        })
        .then(results =>{

            res.json(results)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    //only sex is true
 else if(sex==true & firstName==false & lastName==false){
        model.findAll({
            limit: size1,
            offset: pageNo,
            where:{
                sex:sex1,
                createdAt:{
                    [Op.between]:[start,end]
                }
            } 
        })
        .then(results =>{
            res.json(results)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    //only fname is true
    else if(firstName==true & sex==false & lastName==false){
        model.findAll({
            limit: size1,
            offset: pageNo,
            where:{
                firstName:firstName1,
                createdAt:{
                    [Op.between]:[start,end]
                }
            } 
        })
        .then(results =>{
            res.json(results)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    //only last name is true
    else if(sex == false & firstName == false & lastName == true){
        model.findAll({
            limit: size1,
            offset: pageNo,
            where:{
                lastName:lastName1,
                createdAt:{
                    [Op.between]:[start,end]
                }
            } 
        })
        .then(results =>{
            res.json(results)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    //sex & fname true
    else if(sex == true & firstName == true & lastName == false){
        model.findAll({
            limit: size1,
            offset: pageNo,
            where:{
                [Op.and]:[{sex:sex1},{firstName:firstName1}],
                createdAt:{
                    [Op.between]:[start,end]
                }
            } 
        })
        .then(results =>{
            res.json(results)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    //sex & last name true
    else if(sex == true & firstName == false & lastName == true){
        model.findAll({
            limit: size1,
            offset: pageNo,
            where:{
                [Op.and]:[{sex:sex1},{lastName:lastName1}],
                createdAt:{
                    [Op.between]:[start,end]
                }
            } 
        })
        .then(results =>{
            res.json(results)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    //fname and lname true
    else if(sex == false & firstName == true & lastName == true){
        model.findAll({
            limit: size1,
            offset: pageNo,
            where:{
                [Op.and]:[{firstName:firstName1},{lastName:lastName1}],
                createdAt:{
                    [Op.between]:[start,end]
                }
            } 
        })
        .then(results =>{
            res.json(results)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    else{
        model.findAll({
            limit: size1,
            offset: pageNo,
            where:{
                createdAt:{
                    [Op.between]:[start,end],
                    
                }
            }
        })
        .then(results =>{
            res.json(results)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
};


exports.primaryGetById = (req,res)=>{
    const id = req.query.id
    model.findByPk(id,{
        include:[{
            model: secondary
        }]
    }

    )
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
    const tuborcolosis = req.body.tuborcolosis;
    const malnutrision = req.body.malnutrision;
    const pregnant = req.body.pregnant;
    const remarks = req.body.remarks;
    

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
        tuborcolosis:tuborcolosis,
        malnutrision:malnutrision,
        pregnant:pregnant,
        status:status,
        remarks:remarks
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
    const sex1 = req.body.sex;
    const civilStatus = req.body.civilStatus;
    const soi = req.body.soi;
    const typeofhousehold = req.body.typeofhousehold;
    const ea = req.body.ea;
    const mh = req.body.mh;
    const id = req.query.id;
    const pregnant = req.body.pregnant;
    const tuborcolosis = req.body.tuborcolosis;
    const malnutrision = req.body.malnutrision;
    const remarks = req.body.remarks;

    let status
    if(soi <= 5000){
        status = "Qualified"
    }else{
        status = "Not Qualified"
    }
    let sex
    if(sex1 == true){
        sex = "Male"
    }else{
        sex = "Female"
    }


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
        mh:mh,
        malnutrision:malnutrision,
        tuborcolosis:tuborcolosis,
        pregnant:pregnant,
        status:status,
        remarks:remarks
    },{
        where:{
            id: id
        }}
    ).then(result =>{
        res.send(onUpdate)
    }).catch(err=>{
        console.log(err)
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
