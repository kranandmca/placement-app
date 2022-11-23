const express = require('express');
const passport = require('passport');

const router = express.Router();
const interviewsController = require('../controllers/interview_controller');

router.post('/add', passport.checkAuthentication, interviewsController.create);
router.get(
  '/interview/:id',
  passport.checkAuthentication,
  interviewsController.interview
);

router.post(
  '/allocate',
  passport.checkAuthentication,
  interviewsController.allocate
);
router.post(
  '/result',
  passport.checkAuthentication,
  interviewsController.result
);
module.exports = router;
