const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservations')


router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const newReservation = new Reservation({
        date: new Date(),
        purchase: false,
        idTrip: id
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

router.get('/purchase/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id)
    
    


    Reservation.updateMany({_id: id})
                .then(data=>{
                    console.log(data);
                    res.json({result: true , update: data});
                })
});

module.exports = router;