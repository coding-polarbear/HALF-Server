const userSchema = require('../schemas/userSchema');
const mongoose = require('mongoose');
module.exports = mongoose.model('userModel', userSchema);