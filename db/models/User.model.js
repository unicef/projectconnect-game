const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  ipAddress: { type: String },
  location: { type: String },
  sessionDuration: { type: Number },
  isDesktop: { type: Boolean },
  isPhone: { type: Boolean },
  isTablet: { type: Boolean },
  isMobile: { type: Boolean },
  isTv: { type: Boolean },
  isBot: { type: Boolean },
  isCar: { type: Boolean },
  deviceType: { type: String },
  deviceName: { type: String },
  date: { type: Date },
});

const User = mongoose.model("User", user);
module.exports = User;
