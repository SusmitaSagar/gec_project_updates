const express = require('express');
const router = express.Router();
const Subject = require('../models/subjectModal.js')

router.post('/', (req, res) => {
    const { courseCode, courseName, teacherName, department, syllabus, teacherId } = req.body;
    const tempSubject = {
        courseCode: courseCode,
        courseName: courseName,
        teacherName: teacherName,
        department: department,
        syllabus: syllabus,
        teacherId: teacherId
    }
    Subject.save(tempSubject);
     
})
router.get('/', (req, res) => {
    sub = Subject.find();
    res.json(sub)
})

module.exports = router;