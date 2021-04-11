const express = require('express');
//const bodyParser = require('body-parser');
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
var unirest = require("unirest");
var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
// process.env.port is Heroku's port
const port = process.env.PORT || 5000;
/*
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
////
exports.addRecipe = function(recipe){
    database.collection('contacts').insertOne({
        _id: new ObjectId(),
        Name: recipe['name'],
        Ingredients: recipe['ingredients']
    }, function(err, result){
        console.log('ID returned: '+ result.insertedId);
    })
}
////
/*
req.query({
	"query": "burger",
	"diet": "vegetarian",
	"excludeIngredients": "coconut",
	"intolerances": "egg, gluten",
	"number": "10",
	"offset": "0",
	"type": "main course"
});
req.headers({
	"x-rapidapi-key": "83ab547244mshbe57fd6b6e963adp18dad4jsna2d49a242aa5",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
*/

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));