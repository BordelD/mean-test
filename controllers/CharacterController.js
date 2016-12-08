var CharactersService = require('../services/CharactersService');


module.exports.getList = function (req, res, next) {
    CharactersService.getList()
    	.then(function (characters) {
    		res.status(200).send(characters);
    	})
    	.catch(function (err){
    		res.status(500).send(err);
    	});
};

module.exports.create = function (req, res, next) {

	CharactersService.create(req.body.name, req.body.tvshowName)
		.then(function (character) {
			res.status(201).send(character);
		})
		.catch(function (err){
			res.status(500).send(err);
		});
};

module.exports.update = function (req, res, next) {
	CharactersService.put(req.body._id, req.body.name, req.body.tvshowName)
		.then(function (character) {
			res.status(204).send(character);
		})
		.catch(function (err) {
			if (err == "NOT_FOUND") {
				res.status(404).send({"message": "User not found"});
			}
			res.status(500).send(err);
		})
};

module.exports.delete = function (req, res, next) {
	CharactersService.delete(req.body._id)
		.then(function () {
			res.status(200).send({message: "Character deleted."});
		})
		.catch(function (err) {
			res.status(500).send(err);
		})
};

