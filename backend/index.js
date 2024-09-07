import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./Routes/Users.route.js";
import CourseRoute from "./Routes/Courses.route.js";
import cors from 'cors';


const app = express()
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://aabidhussainpas:n5APJX2vLc8JNv0j@cluster0.jnsu0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("connected")
        // running the server
        app.listen(5000, () => {
            console.log("5000 port")
        })
    })
    .catch((e) => {
        console.log(e)
    })

app.use("/api/users",UserRoutes)
app.use("/api/courses",CourseRoute)