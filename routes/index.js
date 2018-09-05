const express = require('express');
const router = express.Router();

const db = require('../config/db');
const Video = require('../models/storage.js');

/* GET home page. */
router.get('/', async (req, res, next) => {
        //let results = await Video.find({tags: {$ne:'deleted'}}, 'title meta.thumburl tags').limit(30);
        let results = await Video.find({tagsarr : {$nin:['deleted', 'notag']}}).sort({_id:-1}).limit(16);// 'title meta.thumburl tags');
        res.render('index', { title: 'Title' , results: results });
});

module.exports = router;
