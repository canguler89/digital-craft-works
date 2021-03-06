const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
// const mustacheExpress = require("mustache-express");
const pug = require("pug");
const PORT = 3000;
// app.engine("mustache", mustacheExpress());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
// app.get("/movies", (req, res) => {
//   console.log(req.query.sort);
// output sort=asc or sort=des

//   res.send("[Movies]");
// });
// dynamic routes
// app.get("/movies/:genre/:year", function (req, res) {
//   console.log(req.params.genre);
//   console.log(req.params.year);
//   res.send("Movies route with year and genre");
// });

// /////////////////////
// sending json object
// app.get("/movies", (req, res) => {
//   let movie = { title: "Lord of the Rings", year: 2011 };
//   res.json(movie);
// });
// app.get("/ms", (req, res) => {
//   res.render("index", {
//     name: "JOHN DOE",
//     address: {
//       street: "1200 E200th street",
//       city: "Houston",
//     },
//   });
// });

// const users = [
//   { name: "JOHN DOE", age: 24 },
//   { name: "MARY JOE", age: 18 },
//   { name: "ELLISON JOE", age: 40 },
// ];

// app.get("/users", (req, res) => {
//   res.render("users", { users: users });
// });

// app.get("/movies", (req, res) => {
//   let movies = [
//     { title: "Lord of the rings", year: 2011 },
//     { title: "Spider Man", year: 2018 },
//     { title: "The Girl next door", year: 2009 },
//   ];
//   res.json(movies);
// });
// //////////////////////
// POST request
// app.get("/movies", (req, res) => {
//   res.send("Movies");
// });

// app.post("/movies", (req, res) => {
//   let title = req.body.title;
//   let year = req.body.year;
//   let revenue = req.body.revenue;
//   console.log(title);
//   console.log(year);
//   console.log(revenue);
//   res.send("OK");
// });

app.get("/", (req, res) => {
  res.render("index", {
    name: "JOHN DOE",
    address: {
      street: "1200 E200th street",
      city: "Houston",
    },
  });
});
app.get("/userpost", (req, res) => {
  res.render("userpost");
});
app.post("/userpost", (req, res) => {
  console.log(req.body.name);
  console.log(req.body.age);
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
