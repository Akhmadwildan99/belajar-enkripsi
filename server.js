const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('express-flash');
const port = 3000;

app.use(express.urlencoded({ extended: false }))
// Kedua, setting session handler
app.use(session({
    secret: 'Buat ini jadi rahasia',
    resave: false,
    saveUninitialized: false
}))

const passport = require('./node_modules/passport')
app.use(passport.initialize())
app.use(passport.session())
// Keempat, setting flash
app.use(flash())
// Kelima, setting view engine
app.set('view engine', 'ejs')
// Keenam, setting router
const router = require('./router')
app.use(router)


app.listen(port, ()=>{
    console.log(`berjalan di http://localhost:${port}`);
})
