const db = require('./db');

const Cliente = db.sequelize.define('clientes', {
    nome: {
        type: db.Sequelize.STRING
    },
    end: {
        type: db.Sequelize.STRING
    },
    fone: {
        type: db.Sequelize.STRING
    },
    celular: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    cnpj: {
        type: db.Sequelize.STRING
    }
});

module.exports = Cliente