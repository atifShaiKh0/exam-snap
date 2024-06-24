import mongoose from "mongoose";

const UserSchema = mongoose.Schema(

    {
        email:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true
        },
        semester:{
            type:Number,
            required:true
        },
        year:{
            type:Number,
            required:true
        },


    },


    {
        timestamp:true
    }
)

const User = mongoose.model("User",UserSchema)

export default User