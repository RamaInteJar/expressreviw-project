const express = require('express')
const app = express();
const PORT = 3000;


//MIDDLEWARE

//ROUTES
//INDUCES => INDEX, NEW, DELETE, UPDATE, CREATE, EDIT, SHOW
//MVC => Model, View, Controller
//Model => some data definitions, / database to grab and do CRUD with
// View => ejs or whatever the front-end sees 
//Controller => cont

app.get('/', (req, res)=>{
    res.send(`J'ai besoin d'argent et j'en ai besoin maintenant`)
})

//CATCH ALL ROUTES ERRORS
app.get('/*', (req, res)=>{
    res.send("404, Page not found")
})

app.listen(PORT, ()=>{
    console.log(`PORT:  ${PORT} in use do your person!`);
})