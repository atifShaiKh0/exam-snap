// pdfRoutes.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import {getAllPdfs,deletePdf,uploadPdf} from '../controller/UnitsPDF.controller.js';

const router = express.Router();

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.post('/upload', upload.single('file'), uploadPdf);
router.get('/pdfs', getAllPdfs);
router.delete('/pdfs/:id', deletePdf);

export default router;
