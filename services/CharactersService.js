var mongoose = require('mongoose');
var Promise = require('promise');
var Character = require('../models/CharacterModel');

module.exports.getList = function () {
    return new Promise(function (resolve, reject) {
        Character
            .find()
            .exec(function (err, doc) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });

    })
};
