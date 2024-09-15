// Routes/UnitsPDF.route.js
import express from 'express';
import axios from 'axios'

const router = express.Router();



router.get('/fetch-file', async (req, res) => {
    const fileId = '11TC21M3uD3Ka7CW-HtzH8fpO52k7IfkH'; // Replace with your actual file ID
    const apiKey = 'AIzaSyCUbvwiquSUFWEynLO0ZWG84lhSwMFGFoo'; // Replace with your API key
  
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;
  
    try {
        console.log(90)
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      res.set('Content-Type', response.headers['content-type']);
      res.send(response.data);
    } catch (error) {
      res.status(500).send('Error fetching file');
    }
  });


export default router;