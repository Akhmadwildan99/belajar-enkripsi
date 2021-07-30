const { User } = require('../models' )
const passport = require('../lib/passport' )
module.exports = {
register : (req, res, next) => {
 // Kita panggil static method register yang sudah kita buat tadi
 User.register ({
     username: req.body.username,
     password: req.body.password
 })
 .then(() => {
 res.redirect ('/login' )
 })
 .catch(err => next(err))
},
login: passport.authenticate('local', {
   successRedirect: '/',
   failureRedirect: '/login',
   failureRedirect: true 
})
}