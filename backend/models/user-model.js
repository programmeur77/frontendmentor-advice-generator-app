import mongoose from 'mongoose';

const UserModel = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  generatedAdvice: {
    id: { type: Number, required: true },
    adviceDescription: { type: String, required: true },
    generatedAt: { type: Date, default: new Date().toLocaleString() },
  },
  subscribedAt: { type: Date, default: new Date().toLocaleString() },
});

export default mongoose.model('Users', UserModel);
