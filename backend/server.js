import express from 'express';

import userRouter from './routes/user-routes.js';

const app = express();

app.use(express.json());

app.use('/api/users', userRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
