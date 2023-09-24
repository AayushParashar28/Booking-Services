const mongoose = require("mongoose");
const { Schema } = mongoose;

const Booking = new Schema(
    {
        flightID: {
            type: String,
            allowNull: false
        },
        userID: {
            type: String,
            allowNull: false
        },
        status: {
            type: ENUM,
            allowNull: false,
            defaultValue: "InProgress",
            values: ["InProgress", "Booked", "Cancelled"]
        },
        noOfSeats: {
            type: Number,
            allowNull: false,
            defaultValue: 1
        },
        totalCost: {
            type: Number,
            allowNull: false,
            defaultValue: 0
        }
    }
)

const BookingServices = mongoose.model("BookingServices ", Booking);

module.exports = BookingServices;