import Subjects from "../models/Subjects.models"

export const getSubjects = async (req,res)=>{
    try {
        const {semester} = req.body
        const Subject  = await Subjects.find({semester})

        if(!Subject){
            res.status(400).json({message:"not found"})

        }
        res.status(200).json(Subject)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getSubjectByName = async (req,res)=>{
    try {
        const {semester,name} = req.body
        const Subject  = await Subjects.find({semester,name})

        if(!Subject){
            res.status(400).json({message:"not found"})

        }
        res.status(200).json(Subject)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const addSubject = async (req,res)=>{
    try {
        const newSubject = new Subjects(req.body)
        await newSubject.save()
        
        res.status(201).json({ message: 'Subject created successfully', subject: newSubject });

    } catch (error) {
        res.status(400).json(error)
    }
}

export const updateSubject = async (req,res)=>{
    try {
        const {semester,name} = req.body
        const Subject  = await Subjects.find({semester,name})

        if(!Subject){
            res.status(400).json({message:"not found"})

        }
        // res.status(201).json({ message: 'Subject created successfully', subject: newSubject });

    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteSubject = async (req,res)=>{
    try {
        const {semester,name} = req.body
        const Subject = await Subjects.delete({semester,name})
        
        res.status(201).json({ message: 'Subject deleted successfully', subject: Subject });
    } catch (error) {
        res.status(400).json(error)
    }
}
