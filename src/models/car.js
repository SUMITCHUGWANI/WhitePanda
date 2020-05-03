import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CarSchema = new Schema ({
    vehicleNumber:{
        type: String,
        required: 'Enter vehicle number'
    },
    model:{
        type: String,
        required: 'Enter car model'
    },
    city:{
        type: String,
        required: 'Enter vehicle number'
    },
    seatingCapacity:{
        type: Number,
        required: 'Enter seating capacity'
    },
    rentPerDay:{
        type: Number,
        required: 'Enter rent per day'
    },
    status: {
        tyep: String,
    }

})