var db = require("../models");
// Testing
var express = require('express'); 
var router = express.Router(); 

module.exports = function(app) {
  // app.get('/test', function (req, res, next) {
  //   res.render('signin', { title: 'MyApp', css:'style.css'});
  // });

  app.get("/test", function(req, res) {
    res.render("example", {
      title: 'MyApp', css:'style.css'
    });
  });

  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/signin", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/signin", function (req, res) {
    res.locals.metaTags = { 
      title: "Sign In || Sign Up",
      description: "Handlebars description demo for your page",   
      keywords: "Keywords for this page" ,
      css: "style.css"
    }; 
    console.log(res.locals.metaTags.css);
    res.render("signin", { layout: "main" }); 
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
