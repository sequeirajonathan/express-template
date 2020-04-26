const mongoose = require('mongoose');

const ObjectModel = new mongoose.Schema({
    column:{
        type:String,
        require:true,
        unique: true,
        default: ""
    }
});

module.exports = User = mongoose.model('objectModel', ObjectModel);