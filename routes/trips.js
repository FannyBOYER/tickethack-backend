const express = require('express')
const router = express.Router() 
const Trip = require('../models/trips')

router.get('/', (req,res) => {

    Trip.find()
    .then (data => {
        console.log(data)
        res.json({result : data})
    })

});

module.exports = router;