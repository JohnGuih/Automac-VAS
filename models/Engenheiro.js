const { sequelize, DataTypes } = require('../db')

const Engenheiro = sequelize.define('engenheiros', {
    nome: {
        type: DataTypes.STRING
    },
    end: {
        type: DataTypes.STRING
    },
    fone: {
        type: DataTypes.STRING
    },
    celular: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.STRING
    },
    crea: {
        type: DataTypes.STRING
    },
    salario: {
        type: DataTypes.DECIMAL(10,2)
    }
});

module.exports = Engenheiro