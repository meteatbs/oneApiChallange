const mongoose=require('mongoose')
const Vehicle=require('../models/Vehicle')


// save new vehicle
exports.create=(req,res)=>{
    console.log("req",req.body)
    if(!req.body){
        res.status(400).send({message:"Content not found"});
        return ;
    }

   

    const vehicle=new Vehicle({
        vehicleId:req.body.vehicleId,
        createdAt:req.body.createdAt,
        doorstatusfrontleft:req.body.doorstatusfrontleft,
        doorstatusfrontright:req.body.doorstatusfrontright,
        doorstatusrearleft:req.body.doorstatusrearleft,
        doorstatusrearright:req.body.doorstatusrearright,
        doorlockstatusfrontleft:req.body.doorlockstatusfrontleft,
        doorlockstatusfrontright:req.body.doorlockstatusfrontright,
        doorlockstatusrearleft:req.body.doorlockstatusrearleft,
        doorlockstatusrearright:req.body.doorlockstatusrearright

    })

    vehicle.save(vehicle).then(x=>{
        res.send(x)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })


}

 // find vehicle by vehicleId
 exports.findByVehicleId=(req,res)=>{

    const id=req.params.vehicleId
    // console.log(id)
    // console.log("vehicle Id",)
    Vehicle.find({vehicleId:req.params.vehicleId}, (err, items) => {
        if (err) res.status(500).send(error)
        res.status(200).json(items);
      })
    if(!req.body){
        res.status(400).send({message:"Content not found"});
        return ;
    }

}

 // find vehicle by vehicleId
 exports.findByVehicleIdAndUpdate=(req,res)=>{
    // console.log("req get by vehicleId",req.params.vehicleId)
    if(!req.body){
        res.status(400).send({message:"Content not found"});
        return ;
    }
    const id=req.params.vehicleId
    const updates=req.body
    console.log(updates)
    console.log("vehicle Update Id",)
    Vehicle.findOneAndUpdate({vehicleId:id},updates,(err, items) => {
        if (err) res.status(500).send(err)
        res.status(200).json(items);
      })
}

 // find vehicle by vehicleId
 exports.findVehicles=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content not found"});
        return ;
    }
    console.log("vehicle List",)
    Vehicle.find((err, items) => {
        if (err) res.status(500).send(err)
        res.status(200).json(items);
      })
}