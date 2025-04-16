import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
},  {
    timestamps: true,  //createdAt and updatedAt
    } 
);

const FeedBack = mongoose.model('FeedBack', FeedbackSchema);
//mongoose will take it as events collection in the database

export default FeedBack;
