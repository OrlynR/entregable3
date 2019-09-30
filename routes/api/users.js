const { Router } = require('express');
const router = Router();

const Login = require('.../models/Login');
const Signup = require('.../models/Signup')

router.get('/', async (req,res) =>{
    try{
        const users = await Login.find().sort('-_id');
        res.json(users);

    }catch(error){

        console.error("Error en get",error);
    } 

});

router.post('/addUsers', async (req,res) =>{
    
    const newUser = Signup(req.body);

    try{
        await newUser.save()
        res.json(newUser); 
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
        res.send("users");
    
    }catch(error){

        console.error("Error en put",error);
    } 

});

router.delete('/delete/:id', async (req,res) =>{
    try{
        await Signup.remove(
            {"_id" : req.params.id}
        )
        res.send("removeuser");
    
    }catch(error){

        console.error("Error en delete",error);
    } 

});

module.exports = router;