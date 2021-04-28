const Cliente = require('./Cliente');
const Obra = require('./Obra');
const Engenheiro = require('./Engenheiro');
const Registro = require('./Registro');
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize('vas', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

Cliente.hasMany(Obra);
Obra.belongsTo(Cliente);
Obra.belongsToMany(Engenheiro, {through: Registro});
Engenheiro.belongsToMany(Obra, {through: Registro});

(async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();

module.exports = {
    Cliente: Cliente,
    Engenheiro: Engenheiro,
    Obra: Obra,
    Registro: Registro
}