const express =require('express');

const app=express();

app.use(express.json())    //handle post request
app.use(express.urlencoded({extended:true}))

app.set("view engine","hbs")   //use for .hbs extention


app.use('/public',require('./routes/public'))
app.use('/private',require('./routes/private'))
app.use('/',require('./routes/root'))      //use  for connection

app.listen(1234,()=>{
    console.log('Server Running on http://localhost:1234')
})
