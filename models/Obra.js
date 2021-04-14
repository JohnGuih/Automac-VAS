const db = require('./db')

const Obra = db.sequelize.define('obras', {
    end: {
        type: db.Sequelize.STRING
    },
    bairro: {
        type: db.Sequelize.STRING
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    estado: {
        type: db.Sequelize.STRING
    },
    metragem: {
        type: db.Sequelize.STRING
    },
    quartos: {
        type: db.Sequelize.STRING
    },
    wc: {
        type: db.Sequelize.STRING
    },
    infraestrutura: {
        type: db.Sequelize.BOOLEAN
    },
    garagem: {
        type: db.Sequelize.BOOLEAN
    },
    andar: {
        type: db.Sequelize.STRING
    },
    edificio: {
        type: db.Sequelize.STRING
    },
    situacao: {
        type: db.Sequelize.STRING
    },
    dataInicio: {
        type: db.Sequelize.DATE
    },
    dataTermino: {
        type: db.Sequelize.DATE
    },
    observacao: {
        type: db.Sequelize.STRING
    }
});

module.exports = Obra