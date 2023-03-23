const mongoose = require('mongoose');
const SvgSchema = new mongoose.Schema({
  svg: String,
});

module.exports = mongoose.model('svg', SvgSchema);
