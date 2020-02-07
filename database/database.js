const siquelize = require('sequelize');

const connection = new siquelize('guiaperguntas', 'root', 'aio@#321',{
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = connection;