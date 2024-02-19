const express = require('express');

const router = express.Router();
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');
const {validateBody} = require("./middlewares/tasksMiddleware");


router.get('/' , (request,response) => {
    response.status(200).send('router funcionando em nodemom')
});

//passando a função do controller como um middeware
router.get('/tasks' , tasksController.getAll);

//usando middleware para validacao
router.post('/tasks' , tasksMiddleware.validateBody, tasksController.creatTask)

router.delete('/tasks/:id' , tasksController.deleteTask)
module.exports = router ;