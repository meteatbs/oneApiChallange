const mongoose=require('mongoose')


 const connDB=async()=>{
    try {
            const conn=await mongoose.connect(process.env.MONGO_URI,{
                useNewUrlParser:true
            })

            console.log(`DB Connected ${conn.connection.host}`)
    } catch (err) {
        console.log("database connection error : ",err)
        process.exit(1)
    }
}

module.exports=connDB