const { sequelize, DataTypes } = require('../db')

const Cliente = sequelize.define('clientes', {
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
    cnpj: {
        type: DataTypes.STRING
    }
});

module.exports = Cliente
