// /vehicles/{vehicleId}/doors  (GET)
// /vehicles/{vehicleId}/doors  (POST)
const express=require('express')
const router=express.Router()

const vehicleController=require('../controllers/vehicleController')


router.get('/',(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send('you are in index page')
})



// API
router.post('/api/vehicles',vehicleController.create)
router.get('/vehicles',vehicleController.findVehicles)
router.get('/vehicles/:vehicleId/doors',vehicleController.findByVehicleId)
router.post('/vehicles/:vehicleId/doors',vehicleController.findByVehicleIdAndUpdate)


module.exports=router