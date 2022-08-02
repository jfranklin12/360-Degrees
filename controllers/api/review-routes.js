const { Review } = require("../../models");

const router = require("express").Router();


router.get("/", async (req, res) => {

    try {
        
        const review = await Review.findAll();

        res.status(200).json(review);

    } catch (err) {

        res.status(500).json(err);
        
    }

});

//Gets the specific review by the id.
router.get("/:id", async (req, res) => {

    try {

        const review = await Review.findByPk(req.params.id);

        res.status(200).json(review);

    } catch {

        res.status(500).json(err);

    }

});

//TODO: Implement logic once forms are in place.
router.post("/", async (req, res) => {

    try {

        const review = await Review.create({
            //TODO

        });

    } catch (err) {

        res.status(500).json(err);

    }

});

module.exports = router;