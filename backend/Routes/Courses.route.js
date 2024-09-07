import { createCourse,getAllCourse,getCourse,deleteCourse } from "../controller/Courses.controller.js";
import express from "express";

const router = express.Router()

// create Course
router.post('/createCourse',createCourse)

// get Course
router.get('/getCourse', getCourse);

// get all Course
router.get('/getAllCourse',getAllCourse)

// delete Course
router.delete('/deleteCourse/:id',deleteCourse)

export default router