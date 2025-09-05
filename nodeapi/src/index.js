import express from 'express';
import dotenv from 'dotenv';
import geocodeRouter from './routers/geocode.route.js';

dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

app.use(express.json());

app.use('/geocode', geocodeRouter);

app.get('/', (req, res) => {
  res.send('Geocode API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});