import mongoose from 'mongoose';

const dbConnect = () => {
  const dbConnection = mongoose.connect(process.env.MONGO_URI);

  if (!dbConnection) {
    console.error('Mongodb connection failed');
  }

  console.log('Mongoose connection established');
};

export default dbConnect;
