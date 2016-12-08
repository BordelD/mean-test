var mongoose = require('mongoose');
var Promise = require('promise');
var Shows = require('../models/TvshowModel');

module.exports.getO = function (title) {
	return Shows.findOne({title});
};

module.exports.create = function (title, characterID) {
	return new Shows({'title': title, 'casting' : [characterID]}).save();
};

module.exports.createOrUpdate = function(tvshowName, character) {
	return this.getO(tvshowName)
		.then(show => {
			if (!show) {
				return this.create(tvshowName, character._id);
			}
            show.casting.push(character._id);
            show.save();
		})
		.then(() => character)
		.catch(err => err);
};

module.exports.deleteIfEmpty = function(oldTvShowName, character, method) {
	return this.getO(oldTvShowName)
		.then(function (show) {
			if (oldTvShowName !== character.tvshowName || method === "DELETE") {
				var indexChar = show.casting.indexOf(character._id);
				show.casting.splice(indexChar, 1);
				if (show.casting.length) {
					return show.save();
				}

				return show.remove();
			}
			return show;
		})
		.then(() => character)
		.catch(err => err);
};