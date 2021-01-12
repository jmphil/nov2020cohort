const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json')
const axios = require('axios');


router.get('/', (req, res) => {

    let pageSpeakers = dataFile.speakers;

    let pagePhotos = [];
    pageSpeakers.forEach(speakerObj => {
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    });

    console.log(pagePhotos);

    res.render('index', {
        
        pageTitle: "Roux Meetups"
        photos: pagePhotos
    });



});





module.exports = router