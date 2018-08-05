const Sequelize=require('sequelize')

const db=new Sequelize('logindb','root','12348398',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5,
    }
})
const Users=db.define('users',{
    username:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:true
    },
    firstname:Sequelize.STRING,
    lastname:Sequelize.STRING

})
db.sync().then(()=> console.log('Database is ready'))

exports=module.exports={
    db,Users
}