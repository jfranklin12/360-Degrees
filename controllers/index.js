const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
    res.send("<h1>This is not the route you're looking for...</h1>");
});

module.exports = router;