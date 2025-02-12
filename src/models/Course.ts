
import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  modules: { type: [String], required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  stakeAmount: { type: Number, default: 0 }
});

export default mongoose.model('Course', CourseSchema);