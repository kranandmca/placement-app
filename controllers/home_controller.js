const Student = require('../models/student');
const Interview = require('../models/interview');
const moment = require('moment');
module.exports.home = async function (req, res) {
  let interviews = await Interview.find({});
  // console.log(interviews.students);
  let students = await Student.find({});
  // let filtered_student = await Student.find({
  //   _id: { $nin: interviews.students },
  // });
  return res.render('home', {
    title: 'Home',
    students: students,
    interviews: interviews,
    moment: moment,
  });
};
