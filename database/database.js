const Sequelize = require('sequelize'); //pacote que acessa o banco
const sequelize = new Sequelize(
    'lojinha', //banco
    'postgres', //usuario
    'teste123', //senha

    {
        host: 'localhost', // objeto
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
);

module.exports = sequelize;