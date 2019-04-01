var db = require("../models");

module.exports = function(app) {
  app.get("/", function (req, res) {
    res.render("index", {
        title: "Home",
        css: "styles.css",
        signInPage: true,
        navBar: false
    });
  });

  app.get("/signin", function (req, res) {
    res.render("signin", {
        title: "Sign In or Sign Up",
        css: "signin.css",
        signInPage: false,
        navBar: true
    });
  });
  app.get("/studenthub", function (req, res) {
    res.render("studenthub", {
        title: "Student Hub",
        css: "student.css",
        signInPage: false,
        navBar: false
    });
  });
  app.get("/about", function (req, res) {
    res.render("aboutUs", {
        title: "About Us",
        css: "aboutUs.css",
        signInPage: false,
        navBar: false
    });
  });
  app.get("/contact", function (req, res) {
    res.render("contact", {
        title: "Contact Us",
        css: "contact.css",
        signInPage: false,
        navBar: false
    });
  });
  app.get("/majors", function (req, res) {
    res.render("majors", {
        title: "Majors",
        css: "majors.css",
        signInPage: false,
        navBar: false
    });
  });
  app.get("/school", function (req, res) {
    res.render("school", {
        title: "Schools",
        css: "schools.css",
        signInPage: false,
        navBar: false
    });
  });
  // added schedule route
  app.get("/schedule", function (req, res) {
    res.render("schedule", {
        title: "Schedule",
        css: "schedule.css",
        signInPage: false,
        navBar: false
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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
