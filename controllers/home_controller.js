const Student = require('../models/students');
const Interview = require('../models/interviews');
const Batch = require('../models/batches');
const Course_Score = require('../models/course_scores');

const Course = require('../models/courses');
const { Parser } = require('json2csv');

const Result = require('../models/interviews_results');
const moment = require('moment');
module.exports.home = async function (req, res) {
  let interviews = await Interview.find({});
  let courses = await Course.find({});
  let batches = await Batch.find({});

  let results = await Result.find()
    .populate({
      path: 'interview',
      model: Interview,
    })
    .populate({
      path: 'user',
      model: Student,
      populate: {
        path: 'course_scores',
        model: Course_Score,
      },
    });

  let students = await Student.find({});

  return res.render('home', {
    title: 'Home',
    students: students,
    interviews: interviews,
    courses: courses,
    results: results,
    batches: batches,
    moment: moment,
  });
};
