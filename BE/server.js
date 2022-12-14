const express =  require('express');
require('dotenv').config()
const app = express();
const port = process.env.Port || 3030;
const routes = require('./routes/routes')
const bodyParser = require("body-parser");
const cors = require('cors')
const sequelize = require('./database/database.connect')
const primary = require('./models/primary.model');
const secondary = require('./models/secondary.model');


var corsOptions = {
};
app.use(cors(corsOptions));
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.urlencoded({extended:true}));
//using the routes to redirect the app
app.use('/',routes);



//displays error with a 200 status code
app.get('/notFound',(req,res)=>{
    res.status(200).send('API doesn\'t exist :)')
});


//handles non existing API and redirect to /notFound API
app.use((req,res)=>{
    res.redirect('/notFound')
});

secondary.belongsTo(primary,{constrains: true,onDelete:'CASCADE'})
primary.hasMany(secondary)
sequelize
    .sync({force:false})
    .then(result=>{
        app.listen(port,()=>{
            //console.log(result)
            console.log(`app listening to port:${port}`);
            });
    }).catch(err=>{
        console.log(err)
    })


    
