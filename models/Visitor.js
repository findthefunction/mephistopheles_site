// models/Visitor.js
const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  browser: String,
  version: String,
  os: String,
  platform: String,
  source: String,
  isMobile: Boolean,
  isiPhone: Boolean,
  isAndroid: Boolean,
  isDesktop: Boolean,
  isWindows: Boolean,
  isMac: Boolean,
  isLinux: Boolean,
  geo: {
    country: String,
    region: String,
    city: String,
    latitude: Number,
    longitude: Number,
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Visitor', VisitorSchema);
