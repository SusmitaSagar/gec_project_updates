const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true,
    },
    syllabus: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    teacherName: {
        type: String,
        required: true
    },
    teacherID: {
        type: String,
        required: true
    }
})

const Subject = mongoose.model('subject', subjectSchema)

module.exports = Subject;




