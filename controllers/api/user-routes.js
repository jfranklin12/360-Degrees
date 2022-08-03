const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../models");

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

// /api/user/signup 
//This route is used for signing up and creating a new user.
router.post("/signup", async (req, res) => {

    try {

        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        });

        res.status(200).json(user);

    } catch (err) {

        res.status(500).json(err);
    
    }

});

// /api/user/login
//This route is used for logging into an account.
router.post("/login", async (req, res) => {

    try {

        const user = await User.findOne({ where: { username: req.body.username }} );

        if (!user) {

            res.status(404).json({ message: "Invalid username and/or password." });
            return;

        }
        
        const checkPassword = await bcrypt.compare(

            req.body.password,
            user.password

        )

        if (!checkPassword) {

            res.status(400).json({message: "Invalid username and/or password." });
            return;
            
        }

        res.status(200).json({ messsage: "Login successful."});

    } catch (err) {

        res.status(500).json(err);
    
    }

});

module.exports = router;

module.exports = router;