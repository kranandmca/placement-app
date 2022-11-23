const Student = require('../models/students');
const Course = require('../models/courses');
const Course_Score = require('../models/course_scores');

// Create student along with course scores
module.exports.create = async function (req, res) {
  try {
    let existing_student = await Student.findOne({ email: req.body.email });

    if (!existing_student) {
      let student = await Student.create(req.body);
      let courses = await Course.find({});
      let i = 0;
      for (let course of courses) {
        student.courses.push(course._id);
        let courseScore = await Course_Score.create({
          course: course._id,
          user: student._id,
          score: req.body.score[i],
        });
        student.course_scores.push(courseScore._id);
        i++;
      }
      student.save();
      req.flash('success', 'Student added Successfully');
      return res.redirect('/');
    }
    req.flash('error', 'Student already exists!!');
    return res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};
