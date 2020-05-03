import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BookingSchema = new Schema ({
    customerName:{
        type: String,
        required: 'Enter customerName'
    },
    customerPhoneNo:{
        type: String,
        required: 'Enter customer phone number'
    },
    issueDate:{
        type: Date,
        required: 'Enter issue date'
    },
    returnDate:{
        type: Date,
        required: 'Enter return date'
    },
    vehicleNumber:{
        type: String,
        required: 'Enter vehicle number'
    }
})