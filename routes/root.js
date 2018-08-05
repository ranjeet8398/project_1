const route =require('express').Router();
const Users=require('../db').Users

route.get('/login',(req,res)=>{
    res.render('login')
})
route.get('/signup',(req,res)=>{
    res.render('signup')
})

route.post('/login',(req,res)=>{
    Users.findOne({
        where:{
            username:req.body.username
        }
    }).then((users)=>{
        if(!users){
            return res.send("No such Person")
        }
        if(users.password!==req.body.password){
            return res.send("Wrong password")
        }
        return res.send("<h2>Hello</h2> " + users.firstname)
    })
})
route.post('/signup',(req,res)=>{
  Users.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname
    }).then((createdUser)=>{
        res.redirect('/login')
    })

})


exports=module.exports=route