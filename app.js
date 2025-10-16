const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { stringify } = require('querystring');
const app = express();
mongoose.connect('mongodb://localhost:27017/linkde', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB error:", err));
const dataSchema = new mongoose.Schema({
  email: String,
   password: String
});
const joinSchema = new mongoose.Schema({
  firstname: String,
   lastname: String,
  email: String,
   password: String
});

const Data = mongoose.model("Data", dataSchema);
const Join = mongoose.model("Join", joinSchema);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data or JSON (if needed)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.get("/",function (req, res){
  res.render("home");
});
app.post("/submit", function(req, res) {
  const newData = new Data({
    email: req.body.input,
    password: req.body.output
  });

  const joinData = new Join({
 firstname:req.body.a,
  lastname:req.body.b,
    email: req.body.c,
    password: req.body.d
  });

  // Save both and wait for both to finish
  Promise.all([newData.save(), joinData.save()])
    .then(() => {
      console.log("Both Data and Join saved!");
      res.send("Saved successfully!");
    })
    .catch((err) => {
      console.error("❌ Error saving data:", err);
      res.status(500).send("Something went wrong.");
    });
});



app.get("/people",function (req, res){
  res.render("people");
});
app.get("/game1",function (req, res){
  res.render("game1");
});
app.get("/continue",function (req, res){
  res.render("continue");
});
app.get("/sign",function (req, res){
  res.render("sign");
});

app.get("/join",function (req, res){
    res.render("join");
  });
  app.get("/in",function (req, res){
    res.render("in");
  });
  app.get("/topic",function (req, res){
    res.render("topic");
  });
  app.get("/page",function (req, res){
    res.render("page");
  });
   app.get("/game",function (req, res){
    res.render("game");
  });
   app.get("/product",function (req, res){
    res.render("product");
  });
// Start the server
app.listen("3000", function() {
  console.log(`Server is running 3000`);
});