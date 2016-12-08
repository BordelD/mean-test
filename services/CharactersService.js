var mongoose = require('mongoose');
var Promise = require('promise');
var Character = require('../models/CharacterModel');
var Shows = require('./ShowsService.js');

module.exports.getList = function () {
    return Character.find();
};

module.exports.get = function (user) {
    return Character.findOne({'name': user});
};

module.exports.getById = function (_id) {
    return Character.findById(_id);
}

module.exports.create = function (name, tvshowName) {
    return new Character({name, tvshowName}).save()
        .then(character => Shows.createOrUpdate(tvshowName, character))
        .catch(err => err);
};

module.exports.put = function (id, name, tvshowName) {
    var oldTvShowName = null;

    return this.getById(id)
        .then(function (character) {
            if (!character) {
                throw "NOT_FOUND";
            }

            oldTvShowName = character.tvshowName;

            character.name       = name;
            character.tvshowName = tvshowName
            return character.save();
        })
        .then(character => {
            if (tvshowName === oldTvShowName) {
                return character;
            }
            //si serie existe pas => add ou update array character_list
            return Shows.createOrUpdate(tvshowName, character);
        })
        .then(character => Shows.deleteIfEmpty(oldTvShowName, character, "PUT"))
        .catch(err => err);
};

module.exports.delete = function (user) {
    const oldCharacter = {};

    return this.getById(user)
        .then(function (character) {
            oldCharacter.tvshowName = character.tvshowName;
            oldCharacter._id      = character._id;
            character.remove();
        })
        .then(() => {
            Shows.deleteIfEmpty(oldCharacter.tvshowName, oldCharacter, "DELETE")
            return oldCharacter;
        })
        .catch(err => err);
};
