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
    // On gère aussi la casse 

    function escapeRegex(text){ //Gestion caractères spéciaux et espaces
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
    }

    // Fonction pour nettoyer la chaîne : suppression espaces + normalisation regex
    function normalize(text) {
      return escapeRegex(text.replace(/\s+/g, ''));
    }

    const departureRegex = new RegExp(`^${normalize(departure)}$`, 'i');
    const arrivalRegex = new RegExp(`^${normalize(arrival)}$`, 'i');

    Trip.find({
        departure: { $regex: new RegExp(departure.trim().split('').join('\\s*'), 'i') },
         arrival: { $regex: new RegExp(arrival.trim().split('').join('\\s*'), 'i') }, 
        date : {
            $gte: startDate,
            $lt: endDate,
        }
    })               
        .then(data => {
        res.json({trajet : data, result : true})

    })

})

module.exports = router;