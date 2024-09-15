// pdfController.js
import Pdf from '../models/UnitsPDF.model.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const uploadPdf = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!req.file) return res.status(400).send('No file uploaded');

    const filePath = path.join(__dirname, 'uploads', req.file.filename);
    const newPdf = new Pdf({
      title,
      description,
      filePath
    });

    await newPdf.save();
    res.status(201).json(newPdf);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllPdfs = async (req, res) => {
  try {
    const pdfs = await Pdf.find();
    res.status(200).json(pdfs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deletePdf = async (req, res) => {
  try {
    const { id } = req.params;
    const pdf = await Pdf.findByIdAndDelete(id);

    if (!pdf) return res.status(404).send('PDF not found');

    fs.unlinkSync(pdf.filePath); // Delete the file from the server
    res.status(200).json({ message: 'PDF deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
