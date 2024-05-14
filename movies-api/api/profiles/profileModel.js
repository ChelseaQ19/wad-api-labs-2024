import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', unique: true, required: true },
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date },  
  bio: { type: String } 
});

export default mongoose.model('UserProfile', UserProfileSchema);
