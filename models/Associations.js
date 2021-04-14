const Cliente = require('./Cliente');
const Obra = require('./Obra');
const Engenheiro = require('./Engenheiro');
const Registro = require('./Registro');

Cliente.hasMany(Obra);
Obra.belongsTo(Cliente);
Obra.belongsToMany(Engenheiro, {through: Registro});
Engenheiro.belongsToMany(Obra, {through: Registro});

//Cliente.sync({alter: true});
//Engenheiro.sync({alter: true});
//Obra.sync({alter: true});
//Registro.sync({alter: true});

module.exports = {
    Cliente: Cliente,
    Engenheiro: Engenheiro,
    Obra: Obra,
    Registro: Registro
}