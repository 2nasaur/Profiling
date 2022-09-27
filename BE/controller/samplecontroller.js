app.use('/welcome',(req, res,next)=>{
    res.send('welcome');
    next();
})
