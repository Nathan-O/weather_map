// * REQUIREMENTS * //
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var path = require("path");
var methodOverride = require("method-override");
// var db = require("./models");

var app = express();
var api = require("./routes");

// * CONFIG * //
app.use("/static", express.static("public"));
app.use("/vender", express.static("bower_components"));

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

var views = path.join(process.cwd(), "views/");



// * ROUTES * //

// Home Route
app.get("/", function(req, res){
   res.sendFile(views + "index.html");
});

app.use(api);

// * SERVER * //
app.listen(3000, function(){
   console.log("Yes?! What is it?");
});

// app.listen(process.env.PORT || 3000, function(){
// 	console.log("We're running wild!");
// });
