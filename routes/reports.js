const express = require('express');
const passport = require('passport');

const router = express.Router();
const reportsController = require('../controllers/reports_controller');

router.get('/export', passport.checkAuthentication, reportsController.export);

module.exports = router;
