const express = require('express');
const router = express.Router();

router.get('/payments', (req,res)=>{
    res.render('payments/payments');
});

module.exports = router;