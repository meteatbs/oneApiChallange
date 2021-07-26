var Vehicle =require('../models/Vehicle');

var mongoose=require('mongoose');
// const { exists } = require('../models/product');

mongoose.connect('');

var vehicles=[
    new Vehicle({
    vehicleId:'23241241',
    createdAt:Date.now,
    doors:"dsfs"
}),
new Vehicle({
    vehicleId:'123123',
    createdAt:Date.now,
    doors:"fsdfs"
})

];

var done=0;
for (var i = 0; i < vehicles.length; i++) {
    console.log(vehicles.length)
    vehicles[i].save(function(err,result){
        done++;
        if (done=== vehicles.length) {
            exit();
        }
    });
    
}

function exit() {
    mongoose.disconnect();
}