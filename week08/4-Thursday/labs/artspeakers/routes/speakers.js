const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json')
// const axios = require('axios');

router.get('/', (req, res) => {

    res.render('speakers')

});


module.exports = router