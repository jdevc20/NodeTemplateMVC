const express = require('express');
const router = express.Router();


const controller = require('../controllers/indexController')
router.get('/', controller.index)
router.get('/', controller.indexAddToDo)



module.exports = router;