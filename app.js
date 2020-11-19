const express = require('express')
const app = express()
const port = 4567
const route = require('./routers/index')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use('/', route)

app.listen(port, () => {
    console.log('app running');
})