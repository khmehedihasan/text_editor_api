const mongoose = require('mongoose');

const textSchema = mongoose.Schema({
    value:{
        type:String,
        require:true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Text = mongoose.model('text',textSchema);

module.exports = Text;