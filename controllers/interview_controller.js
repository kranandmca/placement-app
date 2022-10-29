const Interview = require('../models/interview');
const Student = require('../models/student');
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
    interview.students.push(req.body.student);
    interview.save();
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

  let students = await Student.find({});

  return res.render('interview', {
    title: 'Interview',
    students: students,
    interviews: interviews,
    moment: moment,
  });
};
