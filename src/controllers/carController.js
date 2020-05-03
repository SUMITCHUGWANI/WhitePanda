import mongoose from 'mongoose'
import {CarSchema} from '../models/car'; 

const Car = mongoose.model('Cars',CarSchema);

export const addNewCar = (req,res ) => {
  let newCar = new Car(req.body);
  newCar.save((err,car) => {
    if(err) {
        res.send(err);
    }
    res.json(car);
  });

}

export const addNewCars = (req,res) => {
    if(req.contentType != "application/json")
        {res.send("Invalid input type")
        return;}
        
    let allCars = req.body;
    console.log( typeof allCars);
    console.log(req);
    
allCars.forEach(car => {
    let newCar = new Car(car);
    newCar.save();
});
  }

export const getCar = (req,res ) => {
    Car.find({}, (err,car) => {
      if(err) {
          res.send(err);
      }
      res.json(car);
    });
  }
  
  export const getCarByNum = (req,res ) => {
    //Car.findById(req.params.vehicleNumber, (err,car) => {
      Car.find({vehicleNumber:req.params.vehicleNumber}, (err,car) => {
      if(err) {
          res.send(err);
      }
      res.json(car);
    });
  }
  export const updateCar = (req,res ) => {
    var car = Car.findById(req.params.carid);
    if(car.status == "Available") {
        Car.findOneAndUpdate({_id: req.params.carid},req.body,{new: true, useFindAndModify: false}, (err,car) => {
         if(err) {
            res.send(err);
        }
        res.json(car);
        });
    }
    else
    res.json({message: "Car can not be updated as it is already booked"});
  }

  export const deleteCar = (req,res ) => {
    var car = Car.findById(req.params.carid);
     if(car.status == "Available"){
        Car.remove({_id: req.params.carid},(err,car) => {
        if(err) {
          res.send(err);
        }
        res.json({message: "Successfully deleted car"});
    });
  }
  else
   res.json({message: "Car can not be deleted as it is already booked"});
}

  export const getAllAvailableCars = (req,res) => {
      Car.find({ status : "Available"},(err,car) => {
        if(err) {
        res.send(err);
    }
    res.json(car);
  });
}

export const getAllAvailableCarsInCity = (req,res) => {
    console.log(`city= ${req.params.city}`)
    Car.find({ status : "Available", city :req.params.city },(err,car) => {
      if(err) {
      res.send(err);
  }
  res.json(car);
}); 
}

export const showAllAvailableCars = (req,res) => {

Car.find({seatingCapacity : { $gte:req.body.seatingCapacity},city: req.body.city,status : 'Available'},(err,car) => {
  if(err) {
    res.send(err);
}
res.json(car);
});
}


  


  


