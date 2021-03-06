const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
  description: { type: String, required: true },
  value: { type: Boolean, default: false },
  votes: { type: Number, default: 0 }
});

const questionSchema = new Schema({
  description: { type: String, required: true },
  answers: [answerSchema]
});

const questionarySchema = new Schema({
  description: { type: String, required: true },
  questions: [questionSchema]
}, {
  timestamps: true
});

const Questionary = mongoose.model('Questionary', questionarySchema);

module.exports = Questionary;