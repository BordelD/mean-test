var express = require('express');
var router = express.Router();
var CharacterController = require('../../controllers/CharacterController.js');

router.get('/',CharacterController.getList

);

module.exports = router;
