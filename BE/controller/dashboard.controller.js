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


const totalFamily = await model.count()
const sub = await model1.count()    
const qualified = await model.count({where:{status: "Qualified"}})
const malnutrision = await model.count({where:{malnutrision: "yes"}})    
const malnutrision1 = await model1.count({where:{malnutrision: "yes"}})  
const pregnant = await model.count({where:{pregnant: "yes"}})  
const pregnant1 = await model1.count({where:{pregnant: "yes"}})  
const tuborcolosis = await model.count({where:{tuborcolosis: "yes"}})  
const tuborcolosis1 = await model1.count({where:{tuborcolosis: "yes"}})  
const Male = await model.count({where:{sex: "Male"}})
const Male1 = await model1.count({where:{sex: "Male"}})
const Female = await model.count({where:{sex: "Female"}})
const Female1 = await model1.count({where:{sex: "Female"}})


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

const mm1 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]}}}); 
const mm2 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]}}});
const mm3 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]}}});
const mm4 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]}}});
const mm5 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]}}});
const mm6 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]}}});
const mm7 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]}}});
const mm8 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]}}});
const mm9 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]}}});
const mm10 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]}}});
const mm11 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]}}});
const mm12 = await model1.count({where:{sex:"Male",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]}}});

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

const ff1 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]}}}); 
const ff2 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]}}});
const ff3 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]}}});
const ff4 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]}}});
const ff5 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]}}});
const ff6 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]}}});
const ff7 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]}}});
const ff8 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]}}});
const ff9 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]}}});
const ff10 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]}}});
const ff11 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]}}});
const ff12 = await model1.count({where:{sex:"Female",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]}}});

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

const pp1 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]}}}); 
const pp2 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]}}});
const pp3 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]}}});
const pp4 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]}}});
const pp5 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]}}});
const pp6 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]}}});
const pp7 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]}}});
const pp8 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]}}});
const pp9 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]}}});
const pp10 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]}}});
const pp11 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]}}});
const pp12 = await model1.count({where:{pregnant: "yes",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]}}});


const t1 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]}}}); 
const t2 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]}}});
const t3 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]}}});
const t4 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]}}});
const t5 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]}}});
const t6 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]}}});
const t7 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]}}});
const t8 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]}}});
const t9 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]}}});
const t10 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]}}});
const t11 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]}}});
const t12 = await model.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]}}});

const tt1 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-01-01 00:00:00`,`${yr}-01-31 11:59:59`]}}}); 
const tt2 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-02-01 00:00:00`,`${yr}-02-28 11:59:59`]}}});
const tt3 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-03-01 00:00:00`,`${yr}-03-31 11:59:59`]}}});
const tt4 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-04-01 00:00:00`,`${yr}-04-30 11:59:59`]}}});
const tt5 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-05-01 00:00:00`,`${yr}-05-31 11:59:59`]}}});
const tt6 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-06-01 00:00:00`,`${yr}-06-30 11:59:59`]}}});
const tt7 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-07-01 00:00:00`,`${yr}-07-31 11:59:59`]}}});
const tt8 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-08-01 00:00:00`,`${yr}-08-31 11:59:59`]}}});
const tt9 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-09-01 00:00:00`,`${yr}-09-30 11:59:59`]}}});
const tt10 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-10-01 00:00:00`,`${yr}-10-31 11:59:59`]}}});
const tt11 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-11-01 00:00:00`,`${yr}-11-30 11:59:59`]}}});
const tt12 = await model1.count({where:{tuborcolosis: "yes",createdAt:{[Op.between]:[`${yr}-12-01 00:00:00`,`${yr}-12-31 11:59:59`]}}});



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

const dashBoard = await {"TotalPopulation":totalPopulation,"TotalFamily":totalFam,"TotalQualified":totalQualified,"TotalMale":tm,"TotalFemale":fm,"TotalTuborcolosis":tb,"TotalMalnorished":totalMalnutrision,"TotalPregnant":totaPregnant,"FamilyYr":yrtotalFam,"tbyr":tyrtb,"MaleYr":yrtotalMale,"FemaleYr":yrtotalFemale,"QualifiedYr":yrtotal4ps,"PregnantYr":yrtotalPreg};

console.log(yr)
await res.json(dashBoard);

};
