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
      const user = await models.client.create({
        firstname:req.body.firstname,
        lastname: req.body.lastname,
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
      const user = await models.client.findOne({
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


const saveResult = async (req, res) =>{
    try {
        
        const user = await models.client.findOne({
            where:{
                id: req.params.id
            }
        })
      console.log(user)
        const result = await models.result.findOne({
            where:{
                resultName: req.params.resultName
            }
        })
            console.log(result)
        if(result){
            await user.addResult(result)
        }else{
            const results = await models.result.create({
                resultName: req.params.resultName
            })
            console.log(results)
            await user.addResult(results)
        }
        res.json ({user, result})
    } catch (error) {
        res.json({error})
    }
}

app.post('/users/:id/:resultName', saveResult)







const PORT = process.env.port || 3011
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
  routesReport.print()
})