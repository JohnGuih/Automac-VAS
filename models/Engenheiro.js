const db = require('./db');

const Engenheiro = db.sequelize.define('engenheiros', {
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
    crea: {
        type: db.Sequelize.STRING
    },
    salario: {
        type: db.Sequelize.DataTypes.DECIMAL(10,2)
    }
});

module.exports = Engenheiro