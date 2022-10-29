const express = require('express');
const passport = require('passport');

const router = express.Router();
const studentsController = require('../controllers/students_controller');

router.post('/add', passport.checkAuthentication, studentsController.create);

module.exports = router;
