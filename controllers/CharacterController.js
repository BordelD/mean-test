var CharactersService = require('../services/CharactersService');


module.exports.getList = function (req, res, next) {
    CharactersService.getList().then(
        function (data) {
            res.status(200).send(data);
        },
        function (err) {
            res.status(500).send(err);
        }
    );
};