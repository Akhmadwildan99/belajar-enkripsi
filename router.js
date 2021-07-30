const router = require('express').Router()
const passport = require('./lib/passport')
// Controllers
const auth = require('./controller/authcontroller' )
// Homepage
router.get('/', (req, res) => res.send(`<h1> Halo Binarian </h1> `))
// Register Page
router.get('/register' , (req, res) =>{
    res.render('register')
})
router.post('/register' , auth.register )
router.get('/login', (req, res) => res.render('login'))
router.post('/login', 
passport.authenticate('local',{ 
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true 
}));


module.exports = router;
