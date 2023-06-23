const router = require("express").Router();
const { AllRockets, OneRockets } = require("../Controllers/RocketController");
router.get("/allRockets", AllRockets);
router.get("/oneRockets", OneRockets);
module.exports = router;
