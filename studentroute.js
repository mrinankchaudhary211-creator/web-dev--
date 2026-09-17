const express = require("express");

const router = express.Router();

let students = [
    {
        id: 1,
        name: "Rahul",
        course: "BCA",
        age: 20
    },
    {
        id: 2,
        name: "Priya",
        course: "BTech",
        age: 21
    },
    {
        id: 3,
        name: "Amit",
        course: "BCA",
        age: 20
    }
];

// GET all students
router.get("/", (req, res) => {
    res.status(200).json(students);
});

// GET student by ID
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json(student);
});

// POST student
router.post("/", (req, res) => {
    const { name, course, age } = req.body;

    if (!name || !course || !age) {
        return res.status(400).json({
            message: "Name, course and age are required"
        });
    }

    const newStudent = {
        id: students.length + 1,
        name,
        course,
        age
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

// PUT student
router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, course, age } = req.body;

    if (!name || !course || !age) {
        return res.status(400).json({
            message: "Name, course and age are required"
        });
    }

    student.name = name;
    student.course = course;
    student.age = age;

    res.status(200).json(student);
});

// DELETE student
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.status(200).json(deletedStudent[0]);
});

module.exports = router;

