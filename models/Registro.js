const { sequelize, DataTypes } = require('../db')

const Registro = sequelize.define('registros', {
    dataEntrada: {
        type: DataTypes.DATE
    },
    dataSaida: {
        type: DataTypes.DATE
    }
});

module.exports = Registro