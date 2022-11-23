const Student = require('../models/students');
const Interview = require('../models/interviews');

const Course_Score = require('../models/course_scores');

const { Parser } = require('json2csv');

const Result = require('../models/interviews_results');

module.exports.export = async function (req, res) {
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
  const fields = [
    {
      label: 'Student Id',
      value: 'user._id',
    },
    {
      label: 'Student Id',
      value: 'user._id',
    },
    {
      label: 'Student Name',
      value: 'user.name',
    },
    {
      label: 'Student College',
      value: 'user.college',
    },
    {
      label: 'Student Status',
      value: 'user.status',
    },
    {
      label: 'Interview Date',
      value: 'interview.interview_date',
    },
    {
      label: 'Interview Company',
      value: 'interview.company_name',
    },
    {
      label: 'Interview Student Result',
      value: 'result',
    },
  ];

  const json2csvParser = new Parser({ fields, flatten: true });

  const csv = json2csvParser.parse(results);
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader(
    'Content-Disposition',
    'attachment; filename=student_record.csv'
  );

  res.status(200).end(csv);
};
