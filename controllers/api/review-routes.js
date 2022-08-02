const router = require("express").Router();


router.get("/", async (req, res) => {

    try {
        res.status(200).json({ message: "Everything is copacetic! "});
    } catch (err) {
        res.status(500).json(err);
    }

});

//Gets the specific review by the id.
router.get("/:id", async (req, res) => {

    try {
        //TODO: Add functionality once database is created and seeded.
        res.status(200).json({ message: "Everything is copacetic! "});
    } catch {
        res.status(500).json(err);
    }

});

module.exports = router;