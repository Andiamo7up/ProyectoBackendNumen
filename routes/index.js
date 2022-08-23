const express = require('express');
const router = express.Router();
const controllers = require('../controller/controller');  

/* GET home page. */
router.get('/', controllers.myIndex("req", res));

module.exports = router;