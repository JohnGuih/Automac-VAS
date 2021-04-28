const Cliente = require('./Cliente');
const Obra = require('./Obra');
const Engenheiro = require('./Engenheiro');
const Registro = require('./Registro');
const { Sequelize, Op, Model, DataTypes, sequelize } = require('../db');

Cliente.hasMany(Obra);
Obra.belongsTo(Cliente);

Obra.belongsToMany(Engenheiro, { through: Registro });
Engenheiro.belongsToMany(Obra, { through: Registro });
Obra.hasMany(Registro);
Registro.belongsTo(Obra);
Engenheiro.hasMany(Registro);
Registro.belongsTo(Engenheiro);

(async () => {
    //await sequelize.sync({ alter: true });
})();

module.exports = {
    Cliente: Cliente,
    Engenheiro: Engenheiro,
    Obra: Obra,
    Registro: Registro
}