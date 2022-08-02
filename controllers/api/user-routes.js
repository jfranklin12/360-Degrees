const { User } = require("../../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
    try {

        const user = await User.findAll();

        res.status(200).json(user);

    } catch (err) {

        res.status(500).json(err)

    }
});

router.get("/:id", async (req, res) => {
    try {
        
        const user = await User.findByPk(req.params.id);

        res.status(200).json(user);

    } catch (err) {

        res.status(500).json(err)

    }
})

module.exports = router;