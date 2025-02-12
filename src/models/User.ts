import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true, unique: true },
  createdCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  status: { type: String, enum: ['active', 'inactive', 'suspended'], default: 'active' }
});

export default mongoose.model('User', UserSchema);