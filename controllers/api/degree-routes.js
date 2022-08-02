const router = require("express").Router();

router.get("/", (req, res) => {
    try {
        //TODO
        res.status(200).json({ message: "Everything is copacetic! "});
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/:id", (req, res) => {
    try {
        //TODO
        res.status(200).json({ message: "Everything is copacetic! "});
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;