import mongoose from "mongoose"
import { Schema } from "mongoose"

const UnitSchema = new Schema({
    unit_number:Number,
    unit:Buffer
})

const SubjectSchema = new Schema({
    sub_name:String,
    no_of_units:Number,
    units:[UnitSchema]
})


const SemesterSchema = new Schema({
    semester_no:Number,
    no_of_subject:Number,
    subjects:[SubjectSchema]
})


const CourseSchema = new Schema({
    name:String,
    no_of_semester:Number,
    semesters:[SemesterSchema]
})

const Courses = mongoose.model("Course",CourseSchema)

export default Courses