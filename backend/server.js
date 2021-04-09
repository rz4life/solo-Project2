const express = require('express')
const app = express()
const axios = require('axios')

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())

const models = require('./models')

const createUser = async (req, res)=>{

    try { 
      const user = await models.user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      res.json ({ message: 'Ok', user})
    } catch (error) {
      res.status(400)
      res.json({error})
    }
}
  
app.post('/users', createUser)


const loginUser = async (req, res) =>{
    try {
      const user = await models.user.findOne({
        where:{
          email: req.body.email
        }
      })
      if(user.password === req.body.password){
        res.json({message: 'login successful', user:user})
      }else{
        res.status(401)
        res.json({error:'email or password is incorrect'})
      }
    } catch (error) {
      console.log(error)
      res.status(400)
      res.json({error:'email or password is incorrect'})
      
    }
}   
app.post('/users/login', loginUser)







const PORT = process.env.port || 3011
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
  routesReport.print()
})