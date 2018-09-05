const express = require('express');
const router = express.Router();

const db = require('../config/db');
const Video = require('../models/storage.js');

/* GET home page. */
router.get('/:videoId', async (req, res, next) => {
        //let results = await Video.find({tags: {$ne:'deleted'}}, 'title meta.thumburl tags').limit(30);
        let results = await Video.findOne({"_id":req.params.videoId});
        //console.log(results);
        res.render('vid', { results: results });
});

module.exports = router;
