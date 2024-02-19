const  connection = require('./connection');
const  getAll = async () =>{
    const   tasks = await connection.execute('select * from tasks');
    return tasks[0] ;
}

const creatTask = async (task) =>{
    //removendo o titulo da task
    const {title} = task ;
    const dataUtc = new Date(Date.now()).toUTCString();

    const createTask = await connection.execute('INSERT INTO TASKS(title,status ,created_at) VALUES(?,?,?)' ,[title,'pendente',dataUtc]);

    return createTask[0];
}

const deleteTask = async (id) =>{

    const deleteTask = await connection.execute('DELETE FROM TASKS where id = ?' , [id]);
    return deleteTask;
}

//para exportar um objeto com todas as funções
module.exports = {
    getAll,
    creatTask,
    deleteTask
}