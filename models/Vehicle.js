const mongoose=require('mongoose')

const VehicleSchema=new mongoose.Schema({
    vehicleId:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    doorstatusfrontleft:{
        type:String,
        enum:['OPEN','CLOSE'],
        default:'CLOSE'
    },
    doorstatusfrontright:{
        type:String,
        enum:['OPEN','CLOSE'],
        default:'CLOSE'
    },
    doorstatusrearleft:{
        type:String,
        enum:['OPEN','CLOSE'],
        default:'CLOSE'
    },
    doorstatusrearright:{
        type:String,
        enum:['OPEN','CLOSE'],
        default:'CLOSE'
    },
    doorlockstatusfrontleft:{
        type:String,
        enum:['LOCKED','UNLOCKED'],
        default:'LOCKED'
    },
    doorlockstatusfrontright:{
        type:String,
        enum:['LOCKED','UNLOCKED'],
        default:'LOCKED'
    },
    doorlockstatusrearleft:{
        type:String,
        enum:['LOCKED','UNLOCKED'],
        default:'LOCKED'
    },
    doorlockstatusrearright:{
        type:String,
        enum:['LOCKED','UNLOCKED'],
        default:'LOCKED'
    }
})



module.exports=mongoose.model('Vehicle',VehicleSchema)