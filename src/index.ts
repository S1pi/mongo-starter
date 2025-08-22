import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoConnect from './utils/db';

const app = express();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await mongoConnect();
    app.listen(port, () => {
      console.log(`Listening: http://localhost:${port}`);
    });
  } catch (error) {
    console.log('Server error', (error as Error).message);
  }
})();

// app.listen(port, () => {
//   console.log(`Listening: http://localhost:${port}`);
// });
