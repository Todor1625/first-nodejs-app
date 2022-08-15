const express = require("express");
const controller = require('../controllers/meteo')

const router = express.Router();

router.get('/', controller.dohvatiStatistike);
router.post('/detalji/', controller.dohvatiDetalje);

module.exports = router;
