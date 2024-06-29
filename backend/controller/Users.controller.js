import User from "../models/Users.model.js";

// Create New user
export const createUser =  async(req,res) =>{
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
        console.log(user)
    } catch (error) {
        res.status(400).json({message:e.message})
    }

}

// get User 
export const getUser = async (req,res)=>{
    try {
        const {id} = req.params
        const user = await User.findById(id)

        if(!user){
            res.status(400).json({message:"User not found"})
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    }


}



// get all user
export const getAllUser = async (req,res) =>{
    try{
        const user =await User.find({})

        if(!user){
            res.status(400).json({message:"User not found"})
        }

        res.status(200).json(user)
    }
    catch(e){
        res.status(400).json({message:e.message})
    }
}


export const deleteUser = async (res,req)=>{
    try{
        // get id of the user 
        const {id} = req.params
        const user = await User.findByIdAndDelete(id)

        if(!user){
            res.status(400).json({message:"User not found"})
        }

        res.status(200).json({message:"User deleted succesfully"})
    }
    catch(e){
        res.status(400).json({message:e.message})

    }

}