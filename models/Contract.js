const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ContractSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  url: {
    type: String,
    required: true
  },
  platform: {
    type: String
  },
  exclusive: {
    type: Boolean
  },
  credit: {
    type: Boolean
  },
  length_usage: {
    type: Number
  },
  price: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Contract = mongoose.model('contract', ContractSchema);
