const auth = require('../models/auth.model')
const bcrypt = require('bcrypt')
const onCreate = {message:"done creating a user"}
const onErr = {message:"error, please try again"}
const salt = 12




exports.postAuth = async(req,res)=>{
    const fname = req.body.firstName;
    const lname = req.body.lastName;
    const uname = req.body.username;
    const pw1 = req.body.password;
    const role = req.body.role;
    const pw =  await bcrypt.hash(pw1, salt)
    auth.create({
        firstName: fname,
        lastName:lname,
        username:uname,
        password:pw,
        role:role
    })
    .then(result =>{
        res.json(onCreate)
    }).catch(err =>{
        res.json(onErr)
    })
};

exports.login = async(req,res)=>{
    const username = req.body.username
    const pw = req.body.password
    const hashbrown = await bcrypt.compare(pw, salt)

    auth.findOne({
        where:{username : username},
        attributes:[`password`]
    })
}
