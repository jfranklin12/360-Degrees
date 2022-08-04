const { restore } = require("../models/User");

const router = require("express").Router();

//This route is for rendering the home page using handlebars.
router.get("/", async (req, res) => {

    try {
        res.render("homepage");
    } catch (err) {
        res.status(500).json(err);
    }

});

// This route is for rendering the login page using handlebars.
router.get("/login", async (req, res) => {

    try {
        res.render("login");
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get("/signup", async (req, res) => {

    try {
        res.render("signup");
    } catch (err) {
        res.status(500).json(err);
    }

});

//This route is for rendering the review page using handlebars.
router.get("/review", async (req, res) => {

    try {
        res.render("review");
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get("/newreview", async (req, res) => {

    try {
        res.render("newreview");
    } catch {
        res.status(500).json(err);
    }

});

//This route is for rendering the degree page using handlebars.
router.get("/degree", async (req, res) => {

    try {
        res.render("degree");
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;