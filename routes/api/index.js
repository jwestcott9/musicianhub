const router = require("express").Router();
const userRoutes = require("./userRoutes");
const cheerioRoutes = require ("./cheerioRouter")

router.use("/users", userRoutes);
router.use("/cheerios", cheerioRoutes);

module.exports = router;
