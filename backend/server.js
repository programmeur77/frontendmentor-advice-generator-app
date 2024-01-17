import 'dotenv/config';
import express from 'express';

import userRouter from './routes/user-routes.js';
import dbConnect from './config/db.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE,PATCH, OPTIONS'
  );
  next();
});

app.use('/api/users', userRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server listening on port 3000!');
  dbConnect();
});
