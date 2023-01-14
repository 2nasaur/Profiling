const auth = require('../models/auth.model')
const bcrypt = require('bcrypt')
const onCreate = {message:"done creating a user"}
const onErr = {message:"error, please try again"}
const salt = 12
const valid = {message:"logged in"}
const notValid = {message:"Invalid Credentials"}
const retry = {message:"Something went wrong, Please try Again"}
const onExist = {message:"User Already Exist"}
const jwt = require("jsonwebtoken")
const secret = 'brgyr3g1strati0n'


exports.postAuth = async(req,res)=>{
    const fname = req.body.firstName;
    const lname = req.body.lastName;
    const uname = req.body.username;
    const pw1 = req.body.password;
    const role = req.body.role;
    const pw =  await bcrypt.hash(pw1, salt)
    const exist = await auth.findOne({where:{username : uname}}).catch((err)=>{console.log("error: ",err)})

    if(exist){res.json(onExist)}
    else{
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
    }
};

exports.login = async(req,res)=>{
    const username = req.body.username
    const acct = await auth.findOne({where:{username : username}})

    
    if(acct){
    const hashbrown = await bcrypt.compare(req.body.password,acct.password)
    auth.findOne({
        where:{username : username}
    })
    .then(result=>{
    if(hashbrown){
        // var token1 = req.cookies.jwt;
        // console.log(token1)

        // const decoded = jwt.verify(token1, secret);
        // console.log(decoded.role)
        var expires = new Date();
        expires.setDate(expires.getDate() + 7);
        const jwtToken = jwt.sign({username:acct.username, role:acct.role},secret)
        res.cookie('jwt', jwtToken,{ expires})
        res.json(valid)
    }else if(!hashbrown){
        res.json(notValid)
}   else{
        res.json(retry)
    }}).catch(err =>{
        res.json(onErr)
})
}else if(!acct){
    res.json(notValid)
}else{
    res.json(onErr)
}
};

