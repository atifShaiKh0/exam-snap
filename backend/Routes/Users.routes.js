import { createUser,getAllUser,getUser,deleteUser } from "../controller/Users.controller.js";
import express from "express";

const router = express.Router()

// create User
router.post('/createUser',createUser)

// get user
router.get('/getUser/:id',getUser)

// get all user
router.get('/getAllUser',getAllUser)

// delete user
router.delete('/deleteUser/:id',deleteUser)

export default router