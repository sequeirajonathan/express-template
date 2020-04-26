const mongoose = require('mongoose');

const ObjectReference = new mongoose.Schema({
    ObjectModel:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'objectModel'
    }
});

module.exports = Profile = mongoose.model('objectReference', ObjectReference);