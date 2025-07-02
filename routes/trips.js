const express = require('express')
const router = express.Router() 
const Trip = require('../models/trips')
const moment = require('moment');


router.post('/', (req, res) => {

    let departure = req.body.departure;                    // req du back qui est le res du front 
    let arrival = req.body.arrival; 
    let date = req.body.date;                              // format Y-M-D ok 
    
    let startDate = new Date(`${date}T00:00:00Z`)           
    let endDate = new Date(`${date}T23:59:59Z`)

    // Pour chaque objet du tablo, comparer date avec celle du body, si celle du body comrpise dans date de chaque élément, alors afficher l'élement 

    Trip.find({
        departure : departure,
        arrival : arrival, 
        date : {
            $gte: startDate,
            $lt: endDate
        }
    })                
        .then(data => {
        res.json({trajet : data, result : true})

    })

})

module.exports = router;