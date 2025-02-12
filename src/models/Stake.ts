// models/Stake.ts
import mongoose from 'mongoose';

const StakeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['upvote', 'downvote'], required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Stake', StakeSchema);
