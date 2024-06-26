import mongoose from "mongoose";

const SubjectSchema = mongoose.Schema(



    {
        name:{
            type:String,
            required:true
        },
        semester:{
            type:Number,
            required:true
      },
        unit1:{
            type:Buffer,
            required:true
        },
        unit2:{
            type:Buffer,
            required:true
        },
        unit3:{
            type:Buffer,
            required:true
        },
        unit4:{
            type:Buffer,
            required:true
        },
        unit5:{
            type:Buffer,
            required:true
        }
    },
    {
        timestamp:true
    }

)

const Subjects = mongoose.model("Subjects",SubjectSchema)

export default  Subjects