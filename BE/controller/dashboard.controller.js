const model = require('../models/primary.model');
const Sequelize = require('sequelize');

exports.dashboard = async(req,res)=>{
const Op = Sequelize.Op;
const yr1 = req.query.year
const year = new Date().getFullYear();

let yr
if (yr1 == undefined)
yr = year
else
yr = yr1


const totalFamily = await model.count()  
const qualified = await model.count({where:{status: "Qualified"}})  
const malnutrision = await model.count({where:{malnutrision: "yes"}})  
const pregnant = await model.count({where:{pregnant: "yes"}})  

//all of this will be total registered
const r1 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]}}}); 
const r2 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]}}});
const r3 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]}}});
const r4 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]}}});
const r5 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]}}});
const r6 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]}}});
const r7 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]}}});
const r8 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]}}});
const r9 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]}}});
const r10 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]}}});
const r11 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]}}});
const r12 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]}}});
//contains male
const m1 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]}}}); 
const m2 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]}}});
const m3 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]}}});
const m4 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]}}});
const m5 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]}}});
const m6 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]}}});
const m7 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]}}});
const m8 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]}}});
const m9 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]}}});
const m10 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]}}});
const m11 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]}}});
const m12 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]}}});
//contains female
const f1 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]}}}); 
const f2 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]}}});
const f3 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]}}});
const f4 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]}}});
const f5 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]}}});
const f6 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]}}});
const f7 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]}}});
const f8 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]}}});
const f9 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]}}});
const f10 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]}}});
const f11 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]}}});
const f12 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]}}});
//4ps
const q1 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]}}}); 
const q2 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]}}});
const q3 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]}}});
const q4 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]}}});
const q5 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]}}});
const q6 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]}}});
const q7 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]}}});
const q8 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]}}});
const q9 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]}}});
const q10 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]}}});
const q11 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]}}});
const q12 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]}}});
//preggy
const p1 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]}}}); 
const p2 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]}}});
const p3 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]}}});
const p4 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]}}});
const p5 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]}}});
const p6 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]}}});
const p7 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]}}});
const p8 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]}}});
const p9 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]}}});
const p10 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]}}});
const p11 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]}}});
const p12 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]}}});

const totalFam = await totalFamily
const totalQualified = await qualified
const totalMalnutrision = await malnutrision
const totaPregnant = await pregnant
const yrtotalFam = await [r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12]
const yrtotalMale = await [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12]
const yrtotalFemale = await [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12]
const yrtotal4ps = await [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12]
const yrtotalPreg = await [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12]

const dashBoard = await {"TotalFamily":totalFam,"TotalQualified":totalQualified,"TotalMalnorished":totalMalnutrision,"TotalPregnant":totaPregnant,"FamilyYr":yrtotalFam,"MaleYr":yrtotalMale,"FemaleYr":yrtotalFemale,"4psYr":yrtotal4ps,"PregnantYr":yrtotalPreg};

console.log(yr)
await res.json(dashBoard);

};