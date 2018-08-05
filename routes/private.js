const route=require('express').Router()


route.get('/',(req,res)=>{
    res.send("<h1>Only for logged user</h1>")
})

exports = module.exports = route