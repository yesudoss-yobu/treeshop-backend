const mongoose = require("mongoose");

const infoShema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  profile: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  sellerName: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
    trim: true,
    // validate: {
    //   validator: (v) => v % 2 === 0,
    //   message: (props) => `${props.value} is not a even number`,
    // },
  },
  reviews: {
    type: Number,
    required: true,
    trim: true,
  },
  details: {
    type: String,
    required: true,
    trim: true,
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("info", infoShema);
