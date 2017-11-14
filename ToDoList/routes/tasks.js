var express = require('express');
var router = express.Router();

var taskController = require('../controllers/taskController');

//GET all Tasks
router.get('/',taskController.task_list);

//GET specific task
router.get('/:id',taskController.task_detail);

//POST one Task
router.post('/ajouttask',taskController.task_ajout_post);


module.exports = router;