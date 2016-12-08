const mongoose = require('mongoose');


var schema = new mongoose.Schema(
    {
        title : {
            type: String
        },
        casting : {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }]
        }
    }
);

module.exports = mongoose.model('Tvshow', schema);

