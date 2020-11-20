const express = require('express')
const app = express()
const port = 4567
const route = require('./routers/index')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    isLogin: false
  }))
  
app.use('/', route)

app.listen(port, () => {
    console.log('app running');
})