const express = require('express');
const router = express.Router();

router.get('/movies/add', (req,res)=>{
    res.render('options/new-movies');
});

router.get('/serie', (req,res)=>{
    res.send('serie from db');
});

module.exports = router;