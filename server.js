const express = require('express')
const app = express();
const PORT = 3000;
const stocks = require('./models/stocks.js')

// console.log(stocks);
app.set('view engine', 'ejs')
//MIDDLEWARE

//ROUTES
//INDUCES => INDEX, NEW, DELETE, UPDATE, CREATE, EDIT, SHOW
//MVC => Model, View, Controller
//Model => some data definitions, / database to grab and do CRUD with
// View => ejs or whatever the front-end sees 
//Controller => cont

//INDEX ROUTES
app.get('/', (req, res)=>{
    // res.send(`J'ai besoin d'argent et j'en ai besoin maintenant`)
    res.render('index')
})


app.get('/stocks', (req, res)=>{
    res.send(stocks)
})
app.get('/stocks/:id', (req, res)=>{
    res.render('show')
})

//CATCH ALL ROUTES ERRORS
app.get('/*', (req, res)=>{
    res.send("404, Page not found")
})

app.listen(PORT, ()=>{
    console.log(`PORT:  ${PORT} in use do your person!`);
})