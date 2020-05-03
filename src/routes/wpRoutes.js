import { addNewCar, getCar,getCarByNum, updateCar,deleteCar,getAllAvailableCars,getAllAvailableCarsInCity, addNewCars, showAllAvailableCars} from '../controllers/carController';
import {addNewBooking,getBookings,getBookingsByNum,updateBooking,deleteBooking,bookCarByVehicleNum} from '../controllers/bookingController';

const routes = (app) => {
    app.route('/car')
        .get((req,res,next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl} `)
            console.log(`Request type: ${req.method}`)
            next();
        },getCar)

        .post(addNewCar);

        app.route('/car/add')
            .post(addNewCars);
        
        app.route('/car/available')
        .get((req,res,next) => {
            console.log(`Request from: ${req.originalUrl} `)
            console.log(`Request type: ${req.method}`)
            next(); },
       // getAllAvailableCars);
       showAllAvailableCars);
    
        app.route('/car/:vehicleNumber')
        .get(getCarByNum)

    app.route('/car/:carid')
        .put(updateCar)
        .delete(deleteCar)

    app.route('/car/available/:city')
    .get((req,res,next) => {
        console.log(`Request from: ${req.originalUrl} `)
        console.log(`Request type: ${req.method}`)
        next(); },
        getAllAvailableCarsInCity)

    app.route('/booking')
        .get(getBookings)
        .post(bookCarByVehicleNum);
    
    app.route('/booking/:bookingId')
        .get(getBookingsByNum)
        .put(updateBooking)
        .delete(deleteBooking);


}

export default routes;


