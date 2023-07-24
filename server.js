const express = require("express");
const app = express();
const PORT = 3000;
const stocks = require("./models/stocks.js");
//Makes a layout to wrap our pages
const expressEjsLayouts = require("express-ejs-layouts");

// console.log(stocks);
//MIDDLEWARE
app.set("view engine", "ejs");
app.use(expressEjsLayouts);

//ROUTES
//INDUCES => INDEX, NEW, DELETE, UPDATE, CREATE, EDIT, SHOW
//MVC => Model, View, Controller
//Model => some data definitions, / database to grab and do CRUD with
// View => ejs or whatever the front-end sees
//Controller => cont

//INDEX ROUTES
app.get("/", (req, res) => {
  // res.send(`J'ai besoin d'argent et j'en ai besoin maintenant`)
  res.render("index", { stocks });
});

app.get("/stocks", (req, res) => {
  res.send(stocks);
});


app.get("/stocks/:name", (req, res) => {
  const name = req.params.name;
  //with find()
  //let stock = stocks.find((s) => s.name.toLowerCase() === name.toLowerCase());

  //with for loop
  let stock;
  for(let i = 0; i < stocks.length; i++){
    if(stocks[i].name.toLowerCase() === name.toLowerCase()){
        stock = stocks[i]
    }
  }
 console.log(stock);
  res.render("show.ejs", {stock});
});

//CATCH ALL ROUTES ERRORS
app.get("/*", (req, res) => {
  res.send("404, Page not found");
});

app.listen(PORT, () => {
  console.log(`PORT:  ${PORT} in use do your person!`);
});
