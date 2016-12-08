var express = require('express');
var router = express.Router();
var CharacterController = require('../../controllers/CharacterController.js');

router.get('/',CharacterController.getList);
router.post('/',CharacterController.create);
router.put('/',CharacterController.update);
router.delete('/',CharacterController.delete);


module.exports = router;
