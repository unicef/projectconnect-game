const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const block = new Schema({
  image: { type: String },
  pollResults: { type: Array, default: [] },
  lat: { type: String },
  long: { type: String },
});

const Block = mongoose.model("Block", user);
module.exports = Block;
