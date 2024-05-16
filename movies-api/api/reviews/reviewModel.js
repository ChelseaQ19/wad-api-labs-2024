import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieReviewSchema = new Schema({
  movieId: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, //references the movie that has the review.
  review: { type: String }
});

export default mongoose.model('MovieReview', MovieReviewSchema);