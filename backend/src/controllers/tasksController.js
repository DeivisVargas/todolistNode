
const tasksModel = require('../models/tasksModel');
const  getAll = async (_req , res) => {
    const task = await tasksModel.getAll();
    return res.status(200).json(task);
}

const creatTask = async (req , res) =>{
    const createdAask = await tasksModel.creatTask(req.body);

    //retornando aponas o id
    return res.status(200).json(createdAask.insertId);
}

const deleteTask = async  (req , res) => {
    const {id} = req.params ;
    const deleteTask = await tasksModel.deleteTask(id)
    return res.status(204).json();
}

const updateTask = async  (req , res) => {

    const {id} = req.params ;
    await tasksModel.updateTask(id , req.body)
    return res.status(204).json();
}

//exportando o objeto
module.exports = {
    getAll,
    creatTask,
    deleteTask ,
    updateTask
}