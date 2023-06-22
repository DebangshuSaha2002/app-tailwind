const router = require("express").Router();
const { AllRockets } = require("../Controllers/RocketController");
router.get("/allRockets", AllRockets);

module.exports = router;
