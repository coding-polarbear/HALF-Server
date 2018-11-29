const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id : {type : String, required : true},
    name : {type : String, required :  true},
    hmd_ip : {type : String, required : true},
    rpi_ip : {type : String, required : true}
});

module.exports = userSchema;