const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservations')


router.get('/recup',(req,res)=>{
    Reservation.find({purchase: false})
                .populate('trip')
                .then(data => {
                    console.log(data);
                    res.json({result: true , recup: data})
                })
})


router.get('/add/:id',(req,res)=>{
    const {id} = req.params;
    const newReservation = new Reservation({
        date: new Date(),
        purchase: false,
        trip: id
    })
    console.log(id)

    newReservation.save()
                .then(data => {
                    console.log(data);
                    res.json({result: true , add: data})
                })
})


router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id)
    
    Reservation.deleteOne({_id: id})
                .then(data=>{
                    console.log(data);
                    res.json({result: true , delete: data});
                })
});

router.put('/purchase',(req,res)=>{
    Reservation.updateMany({},{purchase: true})
                .then(data=>{
                    console.log(data);
                    res.json({result: true , update: data});
                })
});

module.exports = router;