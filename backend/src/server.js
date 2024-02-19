const  app = require('./app');

//para iniciar as variaveis de ambiente
require ('dotenv').config();
//recuperando o valor da variavel de ambiente
const PORT = process.env.PORT || 3333 ;


//acessando o ambiente

app.listen(PORT , () => {
    console.log(`server rodando na porta : ${PORT}`)
})