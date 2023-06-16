const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')


//local
const connectDb=require('./db')

const app = express()
app.set('view engine', 'ejs');






app.use(bodyParser.json())
app.use(express.static('./Public'))
app.use(express.urlencoded({ extended: false }));


const myRoute = require('./Route/Route');
app.use('/', myRoute);

mongoose.connect('mongodb+srv://Tapan:Tapan123@cluster0.sn1se5u.mongodb.net/employee_db?retryWrites=true&w=majority')
.then(()=>{
  console.log('db connected successfully')
  app.listen(9067,()=>{
    console.log('server connected');
  })

})
.catch((err)=>{console.log(err)})