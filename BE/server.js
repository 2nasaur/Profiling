const express = require('express');
const app = express();
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));



app.listen(3000)
app.use(routes);
app.use((req,res)=>{
    res.send('cant find')
})