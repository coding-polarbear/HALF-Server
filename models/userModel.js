const userSchema = require('../schemas/userSchema');
const mongoose = require('mongoose');
module.exports.userModel = mongoose.model('userModel', userSchema);