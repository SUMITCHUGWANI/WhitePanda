import mongoose from 'mongoose'
import {BookingSchema} from '../models/booking'; 
import {CarSchema} from '../models/car';

const Booking = mongoose.model('Booking',BookingSchema);
const Car = mongoose.model('Cars',CarSchema);

export const addNewBooking = (req,res ) => {
  let newBooking = new Booking(req.body);
  newBooking.save((err,booking) => {
    if(err) {
        res.send(err);
    }
    res.json(booking);
  });

}

export const getBookings = (req,res ) => {
    Booking.find({}, (err,booking) => {
      if(err) {
          res.send(err);
      }
      res.json(booking);
    });
  }
  
  export const getBookingsByNum = (req,res ) => {
    Booking.findById(req.params.bookingId, (err,booking) => {
      if(err) {
          res.send(err);
      }
      res.json(booking);
    });
  }
   
  export const updateBooking = (req,res ) => {
    Booking.findOneAndUpdate({_id: req.params.bookingId},req.body,{new: true, useFindAndModify: false}, (err,booking) => {
      if(err) {
          res.send(err);
      }
      res.json(booking);
    });
  }

  export const deleteBooking = (req,res ) => {
    Booking.remove({_id: req.params.bookingId},(err,booking) => {
      if(err) {
          res.send(err);
      }
      res.json({message: "Successfully deleted booking"});
    });
  }

  export const bookCarByVehicleNum = (req,res ) => {  // needs to fix
     var carBooking =   Booking.find({$and :[{vehicleNumber: req.body.vehicleNumber}, {$or: [ {issueDate:{ $lte:req.body.returnDate}},{returnDate : {$gte: req.body.issueDate}}]}]});
     console.log(carBooking);
     if(!carBooking)
        {  let newBooking = new Booking(req.body);
            newBooking.save((err,booking) => {
              if(err) {
                  res.send(err);
              }
              res.json(booking);
            });

        }
   else
        res.json({message : "This car is not available"});
  }
  


