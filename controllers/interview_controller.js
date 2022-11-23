const Interview = require('../models/interviews');
const Student = require('../models/students');
const Result = require('../models/interviews_results');
const moment = require('moment');

module.exports.create = async function (req, res) {
  try {
    let interview = await Interview.create(req.body);
    req.flash('success', 'Interview added Successfully');
    return res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

module.exports.allocate = async function (req, res) {
  try {
    let interview = await Interview.findById(req.body.interview);
    let student = await Student.findById(req.body.student);
    interview.students.push(req.body.student);
    interview.save();
    student.interviews.push(req.body.interview);
    student.save();
    if (req.body.interview == '') {
      req.flash('error', 'Please enter select');
      return res.redirect('/');
    }
    req.flash('success', 'Student  allocated to Interview Successfully');
    return res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

module.exports.interview = async function (req, res) {
  let interviews = await Interview.findById(req.params.id);

  students = await Student.find({ _id: { $nin: interviews.students } });
  let interview_students = await Student.find({
    _id: { $in: interviews.students },
  });

  return res.render('interview', {
    title: 'Interview',
    students: students,
    interviews: interviews,
    interview_students: interview_students,
    moment: moment,
  });
};

module.exports.result = async function (req, res) {
  try {
    let statusv = '';
    let ifmoreStudents = Array.isArray(req.body.status);

    if (ifmoreStudents) {
      const index = req.body.status.findIndex((element) => {
        if (element != '') {
          statusv = element;
          return true;
        }

        return false;
      });
      if (index == -1) {
        req.flash('error', 'No result value selected');
        return res.redirect('/');
      }
      let student = req.body.student_id[index];
      let interview_id = req.body.interview_id[index];

      let result = await Result.create({
        interview: interview_id,
        user: student,
        result: statusv,
      });
      let student_rec = await Student.findById(student);
      student_rec.interviews_results.push(result._id);
      student_rec.save();
    } else {
      if (req.body.status == '') {
        req.flash('error', 'No result value selected');
        return res.redirect('/');
      }
      let student = req.body.student_id;
      let interview_id = req.body.interview_id;
      let result = await Result.create({
        interview: interview_id,
        user: student,
        result: req.body.status,
      });
      let student_rec = await Student.findById(req.body.student_id);
      student_rec.interviews_results.push(result._id);
      student_rec.save();
    }

    req.flash('success', 'Student result updated');
    return res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};
