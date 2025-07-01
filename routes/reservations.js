const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservations')


router.get('/',(req,res)=>{
    Reservation.find()
                .then(data => {
                    console.log(data);
                    res.json({result: true})
                })
})



module.exports = router;