const { User } = require('../models' )
const passport = require('../node_modules/passport' )
module.exports = {
register : (req, res, next) => {
 // Kita panggil static method register yang sudah kita buat tadi
 User.register ({
     username: req.body.username,
     password: req.body.password
 })
 .then(() => {
 res.redirect ('/register' )
 })
 .catch(err => next(err))
}
}