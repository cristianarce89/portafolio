const express = require ('express');
const mainController = require("../controller/mainController")
const router = express.Router();

router.get("/", mainController.index)
router.get("/about", mainController.about)

module.exports = router;
