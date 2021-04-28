const { sequelize, DataTypes } = require('../db')

const Obra = sequelize.define('obras', {
    end: {
        type: DataTypes.STRING
    },
    bairro: {
        type: DataTypes.STRING
    },
    cidade: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    metragem: {
        type: DataTypes.STRING
    },
    quartos: {
        type: DataTypes.STRING
    },
    wc: {
        type: DataTypes.STRING
    },
    infraestrutura: {
        type: DataTypes.BOOLEAN
    },
    garagem: {
        type: DataTypes.BOOLEAN
    },
    andar: {
        type: DataTypes.STRING
    },
    edificio: {
        type: DataTypes.STRING
    },
    situacao: {
        type: DataTypes.STRING
    },
    dataInicio: {
        type: DataTypes.DATE
    },
    dataTermino: {
        type: DataTypes.DATE
    },
    observacao: {
        type: DataTypes.STRING
    }
});

module.exports = Obra