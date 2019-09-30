const express = require('express');
const router = express.Router();

router.get('/services', (req,res)=>{
    res.render('services/services');
});

module.exports = router;