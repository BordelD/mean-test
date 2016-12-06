const mongoose = require('mongoose');


var schema = new mongoose.Schema(
    {
        name : {
            type: String
        },
        tvShow : {
            type: String
        }
    }
);

module.exports = mongoose.model('Character', schema);

