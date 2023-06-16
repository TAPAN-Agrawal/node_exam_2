const url='mongodb+srv://Tapan:Tapan123@cluster0.sn1se5u.mongodb.net/employee_db?retryWrites=true&w=majority'


module.exports=()=>{
    return mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
}