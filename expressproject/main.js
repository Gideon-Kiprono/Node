const express = require("express");

//Creating an instance of the express server
const app = express();

// define routes/pages
app.get("/", (req, res) => {
  //route/home route
  res.render("home.ejs")
});
app.get("/users", (req, res) => {
  //user route
  res.render("users.ejs")
});
app.get("/login", (req, res) => {
  //login route (getting the page)
  res.render("login.ejs")
});
app.post("/login", (req, res) => {
  //login route(getting data from the user)
  res.redirect("/")
});
//404 page
app.get("*", (req,res) => {
  res.status(404).send("<h1>404. Page Not Found. </h1>")
})


//start the application
app.listen(3000, () => console.log("app running and listening on port 3000"));
