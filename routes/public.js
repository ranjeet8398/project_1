const route=require('express').Router()


route.get('/',(req,res)=>{
    res.send("<h1>For anyone</h1>")
})

exports = module.exports = route