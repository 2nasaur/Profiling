const model = require('../models/primary.model');
const model1 = require('../models/secondary.model');
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


const totalFamily = await model.count({where:{remarks:null}});
const sub = await model1.count({where:{remarks:null}});  
const qualified = await model.count({where:{status: "Qualified",remarks:null}})
const malnutrision = await model.count({where:{malnutrision: "yes",remarks:null}})
const malnutrision1 = await model1.count({where:{malnutrision: "yes",remarks:null}})  
const pregnant = await model.count({where:{pregnant: "yes",remarks:null}})  
const pregnant1 = await model1.count({where:{pregnant: "yes",remarks:null}})  
const tuborcolosis = await model.count({where:{tuborcolosis: "yes",remarks:null}})  
const tuborcolosis1 = await model1.count({where:{tuborcolosis: "yes",remarks:null}})  
const Male = await model.count({where:{sex: "Male",remarks:null}})
const Male1 = await model1.count({where:{sex: "Male",remarks:null}})
const Female = await model.count({where:{sex: "Female",remarks:null}})
const Female1 = await model1.count({where:{sex: "Female",remarks:null}})


//all of this will be total registered
const r1 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]},remarks:null}}); 
const r2 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]},remarks:null}});
const r3 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]},remarks:null}});
const r4 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]},remarks:null}});
const r5 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]},remarks:null}});
const r6 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]},remarks:null}});
const r7 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]},remarks:null}});
const r8 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]},remarks:null}});
const r9 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]},remarks:null}});
const r10 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]},remarks:null}});
const r11 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]},remarks:null}});
const r12 = await model.count({where:{createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]},remarks:null}});
//contains male
const m1 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]},remarks:null}}); 
const m2 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]},remarks:null}});
const m3 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]},remarks:null}});
const m4 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]},remarks:null}});
const m5 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]},remarks:null}});
const m6 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]},remarks:null}});
const m7 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]},remarks:null}});
const m8 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]},remarks:null}});
const m9 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]},remarks:null}});
const m10 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]},remarks:null}});
const m11 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]},remarks:null}});
const m12 = await model.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]},remarks:null}});

const mm1 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]},remarks:null}}); 
const mm2 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]},remarks:null}});
const mm3 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]},remarks:null}});
const mm4 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]},remarks:null}});
const mm5 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]},remarks:null}});
const mm6 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]},remarks:null}});
const mm7 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]},remarks:null}});
const mm8 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]},remarks:null}});
const mm9 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]},remarks:null}});
const mm10 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]},remarks:null}});
const mm11 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]},remarks:null}});
const mm12 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]},remarks:null}});

//contains female
const f1 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]},remarks:null}}); 
const f2 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]},remarks:null}});
const f3 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]},remarks:null}});
const f4 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]},remarks:null}});
const f5 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]},remarks:null}});
const f6 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]},remarks:null}});
const f7 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]},remarks:null}});
const f8 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]},remarks:null}});
const f9 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]},remarks:null}});
const f10 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]},remarks:null}});
const f11 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]},remarks:null}});
const f12 = await model.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]},remarks:null}});

const ff1 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]},remarks:null}}); 
const ff2 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]},remarks:null}});
const ff3 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]},remarks:null}});
const ff4 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]},remarks:null}});
const ff5 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]},remarks:null}});
const ff6 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]},remarks:null}});
const ff7 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]},remarks:null}});
const ff8 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]},remarks:null}});
const ff9 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]},remarks:null}});
const ff10 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]},remarks:null}});
const ff11 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]},remarks:null}});
const ff12 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]},remarks:null}});

//4ps
const q1 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]},remarks:null}}); 
const q2 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]},remarks:null}});
const q3 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]},remarks:null}});
const q4 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]},remarks:null}});
const q5 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]},remarks:null}});
const q6 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]},remarks:null}});
const q7 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]},remarks:null}});
const q8 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]},remarks:null}});
const q9 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]},remarks:null}});
const q10 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]},remarks:null}});
const q11 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]},remarks:null}});
const q12 = await model.count({where:{status: "Qualified",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]},remarks:null}});
//preggy
const p1 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]},remarks:null}}); 
const p2 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]},remarks:null}});
const p3 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]},remarks:null}});
const p4 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]},remarks:null}});
const p5 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]},remarks:null}});
const p6 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]},remarks:null}});
const p7 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]},remarks:null}});
const p8 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]},remarks:null}});
const p9 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]},remarks:null}});
const p10 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]},remarks:null}});
const p11 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]},remarks:null}});
const p12 = await model.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]},remarks:null}});

const pp1 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]},remarks:null}}); 
const pp2 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]},remarks:null}});
const pp3 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]},remarks:null}});
const pp4 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]},remarks:null}});
const pp5 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]},remarks:null}});
const pp6 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]},remarks:null}});
const pp7 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]},remarks:null}});
const pp8 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]},remarks:null}});
const pp9 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]},remarks:null}});
const pp10 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]},remarks:null}});
const pp11 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]},remarks:null}});
const pp12 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]},remarks:null}});


const t1 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]},remarks:null}}); 
const t2 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]},remarks:null}});
const t3 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]},remarks:null}});
const t4 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]},remarks:null}});
const t5 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]},remarks:null}});
const t6 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]},remarks:null}});
const t7 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]},remarks:null}});
const t8 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]},remarks:null}});
const t9 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]},remarks:null}});
const t10 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]},remarks:null}});
const t11 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]},remarks:null}});
const t12 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]},remarks:null}});

const tt1 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]},remarks:null}}); 
const tt2 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]},remarks:null}});
const tt3 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]},remarks:null}});
const tt4 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]},remarks:null}});
const tt5 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]},remarks:null}});
const tt6 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]},remarks:null}});
const tt7 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]},remarks:null}});
const tt8 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]},remarks:null}});
const tt9 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]},remarks:null}});
const tt10 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]},remarks:null}});
const tt11 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]},remarks:null}});
const tt12 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]},remarks:null}});

const ml1 = await model.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]},remarks:null}}); 
const ml2 = await model.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]},remarks:null}});
const ml3 = await model.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]},remarks:null}});
const ml4 = await model.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]},remarks:null}});
const ml5 = await model.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]},remarks:null}});
const ml6 = await model.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]},remarks:null}});
const ml7 = await model.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]},remarks:null}});
const ml8 = await model.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]},remarks:null}});
const ml9 = await model.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]},remarks:null}});
const ml10 = await model.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]},remarks:null}});
const ml11 = await model.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]},remarks:null}});
const ml12 = await model.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]},remarks:null}});

const mml1 = await model1.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]},remarks:null}}); 
const mml2 = await model1.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]},remarks:null}});
const mml3 = await model1.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]},remarks:null}});
const mml4 = await model1.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]},remarks:null}});
const mml5 = await model1.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]},remarks:null}});
const mml6 = await model1.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]},remarks:null}});
const mml7 = await model1.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]},remarks:null}});
const mml8 = await model1.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]},remarks:null}});
const mml9 = await model1.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]},remarks:null}});
const mml10 = await model1.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]},remarks:null}});
const mml11 = await model1.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]},remarks:null}});
const mml12 = await model1.count({where:{malnutrision: "yes",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]},remarks:null}});


const totalFam = await totalFamily
const totalQualified = await qualified
const totalMalnutrision = await malnutrision + malnutrision1
const totaPregnant = await pregnant + pregnant1
const yrtotalFam = await [r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12]

//year for male
const tyrtotalMale = await [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12]
const yrtotalMale1 = await [mm1,mm2,mm3,mm4,mm5,mm6,mm7,mm8,mm9,mm10,mm11,mm12]
const yrtotalMale = await tyrtotalMale.map((val, index) => val + yrtotalMale1[index]);

//year for female
const tyrtotalFemale = await [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12]
const yrtotalFemale1 = await [ff1,ff2,ff3,ff4,ff5,ff6,ff7,ff8,ff9,ff10,ff11,ff12]
const yrtotalFemale = await tyrtotalFemale.map((val, index) => val + yrtotalFemale1[index]);


const yrtotal4ps = await [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12]

//year for preg
const tyrtotalPreg = await [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12]
const yrtotalPreg1 =await [pp1,pp2,pp3,pp4,pp5,pp6,pp7,pp8,pp9,pp10,pp11,pp12]
const yrtotalPreg = await tyrtotalPreg.map((val, index) => val + yrtotalPreg1[index]);

//year for tb
const yrtb =  await [t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12]
const yrtb1 =  await [tt1,tt2,tt3,tt4,tt5,tt6,tt7,tt8,tt9,tt10,tt11,tt12]
const tyrtb = await yrtb.map((val, index) => val + yrtb1[index]);

const totalPopulation = await totalFamily + sub
const tb = await tuborcolosis + tuborcolosis1
const tm = await Male + Male1
const fm = await Female + Female1

const Mal1 = [ml1,ml2,ml3,ml4,ml5,ml6,ml7,ml8,ml9,ml10,ml11,ml12];
const Mal2 = [mml1,mml2,mml3,mml4,mml5,mml6,mml7,mml8,mml9,mml10,mml11,mml12]
const MalnutrisionYr = await Mal1.map((val, index) => val + Mal2[index]);

const dashBoard = await {"TotalPopulation":totalPopulation,"TotalFamily":totalFam,"TotalQualified":totalQualified,"MalnutrisionYr":MalnutrisionYr,"TotalMale":tm,"TotalFemale":fm,"TotalTuborcolosis":tb,"TotalMalnorished":totalMalnutrision,"TotalPregnant":totaPregnant,"FamilyYr":yrtotalFam,"tbyr":tyrtb,"MaleYr":yrtotalMale,"FemaleYr":yrtotalFemale,"QualifiedYr":yrtotal4ps,"PregnantYr":yrtotalPreg};

console.log(yr)
await res.json(dashBoard);

};
