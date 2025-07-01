const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    date: Date,
    purchase: Boolean,
    idTrip: { type: mongoose.Schema.Types.ObjectId, ref: 'trips' }
});

const Reservation = mongoose.model('reservations', reservationSchema);

module.exports = Reservation;
