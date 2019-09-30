const { Router } = require('express');
const router = Router();

const Movie = require('.../models/Payment');

router.get('/', async (req,res) =>{
    try{
        const payments = await Payment.find().sort('-_id');
        res.json(payments);

    }catch(error){

        console.error("Error get",error);
    } 

});

router.post('/addPayment', async (req,res) =>{
    
    const addPayment = Payment(req.body);

    try{
        await addPayment.save()
        res.json(addPayment); 
    }catch(error){
        console.error("Error en add",error);
    }
});


router.put('/update/:id', async (req,res) =>{
    try{
        await Signup.findOneAndUpdate(
            {"_id" : req.params.id},
            req.body,
            {new:true}
        )
        res.send("payments");
    
    }catch(error){

        console.error("Error en put",error);
    } 

});

router.delete('/delete/:id', async (req,res) =>{
    try{
        await Payment.remove(
            {"_id" : req.params.id}
        )
        res.send("removepayment");
    
    }catch(error){

        console.error("Error en delete",error);
    } 

});

module.exports = router;