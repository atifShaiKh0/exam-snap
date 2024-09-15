// index.js (or app.js)
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import UserRoutes from './Routes/Users.route.js';
import CourseRoute from './Routes/Courses.route.js';
import pdfRoutes from './Routes/UnitsPDF.route.js';
import cors from 'cors';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://aabidhussainpas:n5APJX2vLc8JNv0j@cluster0.jnsu0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("connected");
        // running the server
        app.listen(5000, () => {
            console.log("5000 port");
        });
    })
    .catch((e) => {
        console.log(e);
    });

app.use("/api/users", UserRoutes);
app.use("/api/courses", CourseRoute);
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files
app.use('/api/pdf', pdfRoutes);
