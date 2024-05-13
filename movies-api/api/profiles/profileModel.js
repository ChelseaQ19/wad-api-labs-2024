import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', unique: true, required: true },
  fullName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
});

export default mongoose.model('UserProfile', UserProfileSchema);
