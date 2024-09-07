import Courses from "../models/Courses.model.js";

// Create New Course
export const createCourse =  async(req,res) =>{
    try {
        const Course = await Courses.create(req.body)
        res.status(200).json(Course)
        console.log(Course)
    } catch (error) {
        res.status(400).json({message:e.message})
    }

}

export const getCourse = async (req, res) => {
    try {
        const { name } = req.query; // Access query parameters using req.query

        // Check if the name parameter is provided
        if (!name) {
            return res.status(400).json({ message: "Course name is required" });
        }

        // Use findOne to fetch a single course by name
        const course = await Courses.findOne({ name: name });

        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};




// get all Course
export const getAllCourse = async (req,res) =>{
    try{
        const Course =await Courses.find({})
        console.log(Course)
        if(!Course){
            res.status(400).json({message:"Course not found"})
        }

        res.status(200).json(Course)
    }
    catch(e){
        res.status(400).json({message:e.message})
    }
}


export const deleteCourse = async (res,req)=>{
    try{
        // get id of the Course 
        const {id} = req.params
        const Course = await Courses.findByIdAndDelete(id)

        if(!Course){
            res.status(400).json({message:"Course not found"})
        }

        res.status(200).json({message:"Course deleted succesfully"})
    }
    catch(e){
        res.status(400).json({message:e.message})

    }

}