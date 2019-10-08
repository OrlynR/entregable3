const express = require('express');
const router = express.Router();
const user = require('../../models/User');

const passport = require('passport');

router.get('/login', (req,res) =>{
    res.render('/');
})

router.post('/login',passport.authenticate('local',{
    successRedirect:'/movies',
    failureRedirect:'/',
}))
router.get('/',(req,res) =>{
    res.render('/');
});

router.post('/',async (req,res)=>{
    const { email, password, confirm_password}= req.body;
    const error =[];

    if( email.length <= 0){
        error.push({ text:'Please insert your Email'});
    }

    if (password != confirm_password){
        error.push({ text:'Password do not match'});
    }

    if(password.length < 6) {
        error.push({ text:'Password must be at least 4 characters'});
    }
    //if(error.length > 0){
    //    res.render('/',{error, email, password ,confirm_password})}
    else {
        //res.redirect('');
        //console.log(req.body);
        const emailUser= await User.findOne({email: email});
        if(emailUser){
            res.redirect('/');
        }
        const newUser= new User({email,password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        res.redirect('/')
    }
    
});



module.exports = router;