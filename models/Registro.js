const db = require('./db');

const Registro = db.sequelize.define('registros', {
    dataEntrada: {
        type: db.Sequelize.DATE
    },
    dataSaida: {
        type: db.Sequelize.DATE
    }
});

module.exports = Registro